import React from 'react'
import './menu.scss'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';

export const Menu = () => {
    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)

         // React Query pour la liste d'amis
         const { isPending, error, data } = useQuery({
            initialData:[],
            queryKey: ['friends', currentUser.id],
            queryFn: () =>
            makeRequest.get("/friends", { params: { id: currentUser.id } }).then((res) => {
                return res.data
            })
        })

         // React Query pour la liste des utilisateurs
         const { isPending : isPendingUser , error : errorUser, data : dataUser } = useQuery({
            initialData:[],
            queryKey: ['userslist'],
            queryFn: () =>
            makeRequest.get("/userslist").then((res) => {
                return res.data
            })
        })

  return (
    <div className='menu-container'>
        <div className='menubar1'>
            <div className="container">
                <div className="menu">
                    <Link className="user" to={`/profile/`+ currentUser.id}>
                        <img src={currentUser.profilePic === null ? profilePicBasic : '/upload/' + currentUser.profilePic} alt="" />
                        <span>My Profile</span>
                    </Link>
                    <Link className="link" to={`/mygallery/`+ currentUser.id}>
                    <div className="item">
                        <ColorLensIcon className='icon'/>
                        <span>
                            My Gallery
                        </span>
                    </div>
                    </Link>
                    <Link className="link" to={`/gallery`}>
                    <div className="item">
                        <GridViewIcon className='icon'/>
                        <span>
                            Global Gallery
                        </span>
                    </div>
                    </Link>
                    
                    <div className="item">
                    {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                        {darkMode?  <span onClick={toggle}>Switch to Light Mode</span> : <span onClick={toggle}>Switch to Dark Mode</span>}
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
        <div className='menubar2'>
            <div className="container">
                <div className="friends-online box">
                    <div className="title">
                        <h4>Online artists</h4>    
                    </div>
                    {isPendingUser
                    ? "Loading"
                    : dataUser.map((user) => (
                        <div className="item" key={user.id}>
                                <Link to={`/profile/${user.id}`}>
                                <div className="img-box">
                                    <img className='item-icon' src={user.profilePic === null ? profilePicBasic : "/upload/" + user.profilePic} alt="" />
                                    <div className="online-buble green"></div>
                                </div>
                                </Link>
                                
                                <Link className='user-box' to={`/profile/${user.id}`}>
                                <div className='user-info'>
                                    <span>{user.name}</span>
                                    <span className='city'>{user.city}</span>
                                </div>
                                </Link>
                        </div>
                    ))}
                </div>
                <div className="latest box">
                    <div className="title">
                        <h4>Latest activities</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                            <div className="activity-info">
                                <span>
                                Steven Seagal
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={profilePicBasic} alt="" />
                            <div className="activity-info">
                                <span>
                                Pascal Obistro
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                            <div className="activity-info">
                                <span>
                                Pierre Palmade
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="suggestions box">
                    <div className="title">
                        <h4>Popular artists</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Steven Seagal
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Indiana Jones
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Batman
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
