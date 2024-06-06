import './register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>  
                    <form action="">
                        <input type="text" placeholder='Username'/>
                        <input type="text" placeholder='Name'/>
                        <input type='mail' placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                        <button>Register</button>
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