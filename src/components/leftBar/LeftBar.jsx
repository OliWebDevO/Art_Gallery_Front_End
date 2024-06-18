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
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';

const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);
    const {toggle, darkMode} = useContext(DarkModeContext)


         // React Query pour la liste d'amis
         const { isPending, error, data } = useQuery({
            initialData:[],
            queryKey: ['friends', currentUser.id],
            queryFn: () =>
            makeRequest.get("/friends", { params: { id: currentUser.id } }).then((res) => {
                return res.data
            })
        })
 
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <Link className="user" to={`/profile/`+ currentUser.id}>
                        <img src={currentUser.profilePic === null ? profilePicBasic : '/upload/' + currentUser.profilePic} alt="" />
                        <span>My profile</span>
                    </Link>
                    <div className="item">
                        <ColorLensIcon className='icon'/>
                        <span>
                            My gallery
                        </span>
                    </div>
                    <Link className="link" to={`/gallery`}>
                    <div className="item">
                        <GridViewIcon className='icon'/>
                        <span>
                            General gallery
                        </span>
                    </div>
                    </Link>
                    
                    <div className="item">
                    {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                        {darkMode?  <span onClick={toggle}>Switch to Light Mode</span> : <span onClick={toggle}>Switch to dark Mode</span>}
                    </div>
                    <div className="item">
                        <MailOutlineIcon className='icon'/>
                        <span>
                            Messages
                        </span>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className='icon'/>
                        <span>
                            Notifications
                        </span>
                    </div>
                    <div className="item last-item">
                        <CalendarMonthOutlinedIcon className='icon'/>
                        <span>
                            Events
                        </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="menu">
                    <div className="item first-item artists">
                        <h4>Followed artists</h4>
                    </div>
                    {error 
                    ? "Error"
                    : isPending
                    ? "Loading"
                    : data.map((user) => (
                        <Link className='user-link' key={user.id} to={`/profile/${user.id}`}>
                            <div className="item">
                                <img className='item-icon' src={user.profilePic === null ? profilePicBasic : "/upload/" + user.profilePic} alt="" />
                                <div className='user-info'>
                                    <span>{user.name}</span>
                                    <span className='city'>{user.city}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeftBar