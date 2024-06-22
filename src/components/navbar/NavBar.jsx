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
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import LogoutIcon from '@mui/icons-material/Logout';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)
    const [openMenu, setOpenMenu] = useState(false)

    const handleLogout = () => {
        localStorage.clear();
        location.reload()
    }
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="nav-bg">
            <div className='navbar'>
                <div className="left">
                    <Link to={"/"} className='link'>
                        <div className="logo">Art Gallery</div>
                    </Link>
                    {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                    <Link className="link" to={`/gallery`}>
                        <GridViewIcon className='icon'/>
                    </Link>
                    <Link to={"/"} className='link'>
                        <HomeOutlinedIcon className='icon'/>
                    </Link>
                    <div className="search">
                        <SearchIcon/>
                        <input type="text" name="" id="" placeholder='Search...' />
                    </div>
                </div>
                {openMenu === false
                ? (<Link onClick={handleMenu} className=" small-menu " to={`/menu`}>
                    <MenuIcon className='icon small-menu-icon'/>
                </Link>)
                : (<Link onClick={handleMenu} className=" small-menu " to={`/`}>
                    <ClearIcon className='icon small-menu-icon'/>
                </Link>)}
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