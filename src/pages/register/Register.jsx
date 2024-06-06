import { useState } from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    })
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:8800/api/auth/register', inputs)
        } catch(err) {
            setError(err.response.data)
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
                        {error && <div className='error'>{error}</div>}
                        <button onClick={handleClick}>Register</button>
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