import './app.scss'
import './style.scss'
import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import MyGallery from './pages/myGallery/MyGallery';
// React Router DOM functions
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
//React Query import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Gallery from './pages/gallery/Gallery';
import { Menu } from './pages/menu/Menu';


// THE APP
function App() {

// Context API usage, for Auth and DarkMode
const {currentUser} = useContext(AuthContext);

const {darkMode} = useContext(DarkModeContext);

const queryClient = new QueryClient()


// Layout of components
const Layout = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className={`theme-${darkMode? "dark" : "light"}`}>
      <NavBar/>
      <div className='app' style={{display: "flex"}}>
        <LeftBar/>
        <ScrollToTop/>
        <Outlet/>
        <RightBar/>
      </div>
    </div>
    </QueryClientProvider>
  )
}

// If the user is not loggedin, send to login page, otherwise load the children
const ProtectedRoute = ({children}) => {
  if (!currentUser){
    return <Navigate to ="/login"/>
  }
  return children
}

// React Router DOM paths
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          // path:"/profile/" + currentUser.id,
          path:"/profile/:id",
          element:<Profile/>
        },
        {
        path:"/gallery",
        element:<Gallery/>
        },
        {
          // path:"/profile/" + currentUser.id,
          path:"/mygallery/:id",
          element:<MyGallery/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },

  ]);

  // The App launch
  return (
  <div className='app'>
      <RouterProvider router={router} />
  </div>
  );
}

export default App;
