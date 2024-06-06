import Post from '../../components/post/Post';
import './profile.scss'
import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import imgMiniGallery1 from '../../assets/gallery/gallery1.jpeg'
import imgMiniGallery2 from '../../assets/gallery/gallery48.jpeg'
import imgMiniGallery3 from '../../assets/gallery/gallery32.jpeg'
import imgMiniGallery4 from '../../assets/gallery/gallery60.jpeg'
import imgMiniGallery5 from '../../assets/gallery/gallery4.jpeg'
import imgMiniGallery6 from '../../assets/gallery/gallery40.jpeg'

const Profile = () => {

    const {currentUser} = useContext(AuthContext);

    const posts = [
        {
          "id": 1,
          "name": "Jacques",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 101,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "A breathtaking view of the mountains during sunrise."
        },
        {
          "id": 2,
          "name": "Batman",
          "img": "https://images.pexels.com/photos/417506/pexels-photo-417506.jpeg",
          "userId": 102,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Being a unicorn is an enchanting experience unlike any other. Unlike humans, unicorns possess a magical aura that exudes beauty and grace. Their days are filled with adventure as they gallop through mystical forests and prance under rainbows. Unicorns have the unique ability to heal and bring joy to those around them, a power humans can only dream of. With a shimmering horn, unicorns can tap into ancient magic, creating miracles and wonders. Their lives are unburdened by the mundane worries that humans face daily. Unicorns communicate with nature, forming bonds with woodland creatures and the elements. They inspire legends and tales of hope, embodying purity and strength. While humans strive for happiness, unicorns live it effortlessly, their existence a blend of fantasy and reality. To be a unicorn is to experience life in its most magical and serene form, far beyond the ordinary scope of human life."
        },
        {
          "id": 3,
          "name": "John Senna",
          "img": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
          "userId": 103,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "A serene path through the lush green forest."
        },
        {
          "id": 4,
          "name": "Patrick Sebastien",
          "img": "https://images.pexels.com/photos/34950/pexels-photo.jpg",
          "userId": 104,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Golden sunset over a tranquil beach."
        },
        {
          "id": 5,
          "name": "Pascal Obistro",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 105,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "Rolling sand dunes under a clear blue sky."
        }
      ];

    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-banner">
                    <img className='banner-pic' src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className='profile-pic' src="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="profile-infos">
                    <div className="profile-title">
                        <div className="profile-name">
                            <h3>{currentUser.name}</h3>
                        </div>
                        <div className="profile-interact">
                            <button>Follow</button>
                            <MoreVertIcon className='icon'/>
                            <MailOutlineIcon className='icon'/>
                        </div>
                    </div>
                    <div className="profile-connect">
                        <div className="profile-social">
                            <InstagramIcon className='icon'/>
                            <PinterestIcon className='icon'/>
                            <FacebookIcon className='icon'/>
                            <LinkedInIcon className='icon'/>
                            <XIcon className='icon'/>
                        </div>
                        <div className="profile-find">
                            <div className="profile-location">
                                <LocationOnIcon className='icon'/>
                                <span>Bruxelles, Belgium</span>
                            </div>
                            <div className="profile-website">
                                <WebIcon className='icon'/>
                                <span>Website</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-desc">
                        <p>
                            Being a unicorn is an enchanting experience unlike any other. Unlike humans, unicorns possess a magical aura that exudes beauty and grace. Their days are filled with adventure as they gallop through mystical forests and prance under rainbows. Unicorns have the unique ability to heal and bring joy to those around them, a power humans can only dream of. With a shimmering horn, unicorns can tap into ancient magic, creating miracles and wonders. Their lives are unburdened by the mundane worries that humans face daily. Unicorns communicate with nature, forming bonds with woodland creatures and the elements. 
                        </p>
                        <FormatQuoteIcon className='icon abs a1'/>
                        <FormatQuoteIcon className='icon abs a2'/>
                    </div>
                    <div className="profile-gallery">
                       <img className='profil-grid-item-1' src={imgMiniGallery1} alt="" />
                       <img className='profil-grid-item-2' src={imgMiniGallery2} alt="" />
                       <img className='profil-grid-item-3' src={imgMiniGallery3} alt="" />
                       <img className='profil-grid-item-4' src={imgMiniGallery4} alt="" />
                       <img className='profil-grid-item-5' src={imgMiniGallery5} alt="" />
                       <img className='profil-grid-item-6' src={imgMiniGallery6} alt="" />
                    </div>
                </div>
                <div className="posts">
                    {posts.map(post => (
                    <Post post={post} key ={post.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile