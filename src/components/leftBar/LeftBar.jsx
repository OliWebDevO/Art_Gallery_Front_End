import './leftbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import React from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'

const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);
    const {toggle, darkMode} = useContext(DarkModeContext)

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
                        <img src={currentUser.profilePic === null ? profilePicBasic : '/upload/' + currentUser.profilePic} alt="" />
                        <span>My profile</span>
                    </Link>
                    <div className="item">
                        <ColorLensIcon/>
                        <span>
                            My gallery
                        </span>
                    </div>
                    <div className="item">
                        <GridViewIcon/>
                        <span>
                            General gallery
                        </span>
                    </div>
                    <div className="item">
                    {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                        {darkMode?  <span onClick={toggle}>Switch to Light Mode</span> : <span onClick={toggle}>Switch to dark Mode</span>}
                    </div>
                    <div className="item">
                        <MailOutlineIcon/>
                        <span>
                            Messages
                        </span>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon/>
                        <span>
                            Notifications
                        </span>
                    </div>
                    <div className="item last-item">
                        <CalendarMonthOutlinedIcon/>
                        <span>
                            Events
                        </span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <div className="item first-item">
                        <h4>Favorite artists</h4>
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
                {/* <hr />
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
                </div> */}
            </div>
        </div>
    )
}

export default LeftBar