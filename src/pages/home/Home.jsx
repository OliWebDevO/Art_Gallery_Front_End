import { useContext } from 'react'
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import './home.scss'
import { AuthContext } from '../../context/authContext'
import { Share } from '../../components/share/Share'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Home = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className='home'>
            <Stories/>
            <Share userId={currentUser.id}/>
            <Posts/>
            <ToastContainer/>
        </div>
    )
}

export default Home