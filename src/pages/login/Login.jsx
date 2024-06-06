import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import './login.scss'

const Login = () => {

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const {login} = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(inputs);
        } catch (err){
            setError(err.response.data)
        }
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
                        <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                        <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                        {error && <div className='error'>{error}</div>}
                        {/* <Link to ={'/'}> */}
                        <button onClick={handleLogin}>Login</button>
                        {/* </Link> */}
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