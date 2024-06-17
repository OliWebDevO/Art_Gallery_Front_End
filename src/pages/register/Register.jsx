import { useState } from 'react'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {


    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    })

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    // toastify
    const notifyRegisterFail = () => toast("User already exists || Missing details");

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault()
        if (!inputs.username || !inputs.password) {
            notifyRegisterFail();
            return;
        }
        try {
            await axios.post('http://localhost:8800/api/auth/register', inputs)
            navigate("/login")
        } catch(err) {
            setError(err.response.data)
            notifyRegisterFail();
        }
    }

    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>  
                    <form action="">
                        <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                        <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                        <input type='mail' placeholder='Email' name='email' onChange={handleChange}/>
                        <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                        <button onClick={handleClick}>Register</button>
                        <ToastContainer />
                        <Link to={'/login'}>
                        <button className='login-btn'>Login</button>
                        </Link>
                    </form>
                </div>

                <div className="right">
                    <h1>Enter <br /> The Gallery</h1>
                    <span>Do you have an account ? </span>
                    <Link to={'/login'}>
                    <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register