import { useContext } from 'react';
import './login.scss'
// import img1 from '../img/art1.jpeg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {

    const {login} = useContext(AuthContext);
    const handleLogin = () => {
        login();
    }

    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Art <br /> Gallery</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur, felis sit amet convallis egestas, quam purus dapibus arcu, ac condimentum quam justo vitae lacus. Sed congue metus eget malesuada tempor.
                    </p>
                    <span>Don't you have an account yet ?</span>
                    <Link to={'/register'}>
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>  
                    <form action="">
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <Link to ={'/'}>
                        <button onClick={handleLogin}>Login</button>
                        </Link>
                        <Link to={'/register'}>
                        <button className='register-btn'>Register</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login