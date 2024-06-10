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

const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)

    return (
        <div className='navbar'>
            <div className="left">
                <Link to={"/"} style={{textDecoration:"none", color:"black"}}>
                    <div className="logo">Art Gallery</div>
                </Link>
                <HomeOutlinedIcon className='icon'/>
                {darkMode? <LightModeIcon className='icon' onClick={toggle}/> : <DarkModeOutlinedIcon className='icon' onClick={toggle}/>}
                <GridViewIcon className='icon'/>
                <div className="search">
                    <SearchIcon/>
                    <input type="text" name="" id="" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <PermIdentityIcon className='icon'/>
                <MailOutlineIcon className='icon'/>
                <NotificationsNoneIcon className='icon'/>      
                <Link className="user" to={`/profile/`+ currentUser.id}>
                    <img src={'/upload/' + currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </Link>
                
            </div>
        </div>
    )
}

export default NavBar