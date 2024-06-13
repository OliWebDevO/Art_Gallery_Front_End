import './leftbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import React from 'react'


const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);

    const handleClick = () => {
        setTimeout(() => {
            location.reload();
          }, "1");
    }

    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <Link className="user" onClick={handleClick} to={`/profile/`+ currentUser.id}>
                        <img src={'/upload/' + currentUser.profilePic} alt="" />
                        <span>My profile</span>
                    </Link>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            My gallery
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            the gallery
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item last-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    
                    <div className="item first-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item last-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                   
                    <div className="item first-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar