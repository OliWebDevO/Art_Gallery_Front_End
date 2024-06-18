import './navbar.scss'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewIcon from '@mui/icons-material/GridView';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import LogoutIcon from '@mui/icons-material/Logout';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'
const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)


    const handleLogout = () => {
        localStorage.clear();
        location.reload()
    }


    return (
        <div className="nav-bg">
            <div className='navbar'>
                <div className="left">
                    <Link to={"/"} className='link'>
                        <div className="logo">Art Gallery</div>
                    </Link>
                    <Link to={"/"} className='link'>
                        <HomeOutlinedIcon className='icon'/>
                    </Link>
                    {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                    <Link className="link" to={`/gallery`}>
                        <GridViewIcon className='icon'/>
                    </Link>
                    <div className="search">
                        <SearchIcon/>
                        <input type="text" name="" id="" placeholder='Search...' />
                    </div>
                </div>
                <div className="right">
                    <Link className="user link"  to={`/profile/`+ currentUser.id}>
                        <PermIdentityIcon className='icon profile-i'/>
                    </Link>
                    <MailOutlineIcon className='icon mail-i'/>
                    <NotificationsNoneIcon className='icon notif-i'/>
                    <Link className="user link" to={`/profile/`+ currentUser.id}>
                        <img className='u-buble' src={currentUser.profilePic === null ? profilePicBasic : '/upload/' + currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </Link>
                    <LogoutIcon className='icon' onClick={handleLogout}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar