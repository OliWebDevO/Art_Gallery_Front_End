import Post from '../../components/post/Post';
import Posts from '../../components/posts/Posts';
import './profile.scss'
import { useContext, useState } from 'react'
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
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import Update from '../../components/update/Update';
import { Share } from '../../components/share/Share';


const Profile = () => {

    const {currentUser} = useContext(AuthContext)

    //Update part
    const [openUpdate, setOpenUpdate] = useState(false)

    //Cherche le numéro de profil dans l'url
    const userId = parseInt(useLocation().pathname.split("/")[2])
    // React Query pour le profil
    const { isPending, error, data } = useQuery({
        initialData:[],
        queryKey: ['user'],
        queryFn: () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data
        })
    })
    const { isPending: relationshipIsPending, data: relationshipData } = useQuery({
        initialData:[],
        queryKey: ['relationship'],
        queryFn: () =>
        makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
            return res.data
        })
    })

    //React Query
    const queryClient = useQueryClient()
    // Mutations
    const mutation = useMutation({
    mutationFn: (followed) => {
        if(followed) return makeRequest.delete('/relationships?userId=' + userId)
        return makeRequest.post('/relationships', { userId })
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['relationship'] })
    },
    })


    const handleFollow = () => {
        mutation.mutate(relationshipData.includes(currentUser.id))
    }


    return (
        <div className='profile'>
            {isPending ? "Loading " :
            (<>
                <div className="profile-container">
                <div className="profile-banner">
                    <img className='banner-pic' src={"/upload/" + data.coverPic} alt="" />
                    <img className='profile-pic' src={"/upload/" + data.profilePic} alt="" />
                </div>
                <div className="profile-infos">
                    <div className="profile-title">
                        <div className="profile-name">
                            <h3>{data.name}</h3>
                        </div>
                        <div className="profile-interact">
                            {relationshipIsPending ?
                            "Loading" 
                            : userId === currentUser.id ? (
                            <button onClick={()=>setOpenUpdate(true)}>Update</button>
                            ) : (
                            <button onClick={handleFollow}>
                                {relationshipData.includes(currentUser.id) 
                                ? 'Followed' 
                                : 'Follow'}
                            </button>
                            )}
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
                                <span>{data.city}</span>
                            </div>
                            <div className="profile-website">
                                <WebIcon className='icon'/>
                                <span>{data.website}</span>
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
                {userId === currentUser.id && <Share/>}
                <Posts userId={userId}/>
                </div>
            </div>
            </>)}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
        </div>
    )
}

export default Profile
