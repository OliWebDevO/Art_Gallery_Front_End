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
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import Update from '../../components/update/Update';
import { Share } from '../../components/share/Share';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SyncIcon from '@mui/icons-material/Sync';

const Profile = () => {

    const {currentUser} = useContext(AuthContext)

    //Update part
    const [openUpdate, setOpenUpdate] = useState(false)

    //States to Update Mini Gallery
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [img3, setImg3] = useState(null)
    const [img4, setImg4] = useState(null)
    const [img5, setImg5] = useState(null)
    const [img6, setImg6] = useState(null)

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


       //Part for mediaUpload of MiniGallery
       //File upload function
       const uploadMiniGallery = async (file) => {
        try{
        const formData = new FormData();
        formData.append('file', file)
        const res = await makeRequest.post('/upload', formData);
        return res.data
        }catch(err){
        console.log(err)
        }
    }

    //React Query pour l'update
    const queryClientMiniGallery = useQueryClient()
    // Mutations
    const mutationMiniGallery = useMutation({
    mutationFn: () => {
        return makeRequest.put('/users', data)
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClientMiniGallery.invalidateQueries({ queryKey: ['user'] })
    },
    })

    // const handleSubmitMg = async (e) => {
    //     e.preventDefault()
    //     //On apporte le file avec la fct upload de muller
    //     let img1Url;
    //     let img2Url;
    //     let img3Url;
    //     let img4Url;
    //     let img5Url;
    //     let img6Url;
    //     img1Url = img1 ? await uploadMiniGallery(img1) : data.miniGallery1
    //     // img2Url = img2 ? await uploadMiniGallery(img2) : data.miniGallery2;
    //     // img3Url = img3 ? await uploadMiniGallery(img3) : data.miniGallery3;
    //     // img4Url = img4 ? await uploadMiniGallery(img4) : data.miniGallery4;
    //     // img5Url = img5 ? await uploadMiniGallery(img5) : data.miniGallery5;
    //     // img6Url = img6 ? await uploadMiniGallery(img6) : data.miniGallery6;
    //     //On amène la mutation de react query
    //     mutationMiniGallery.mutate({miniGallery1: img1Url})
    //         // img2 : img2Url, 
    //         // img3 : img3Url, 
    //         // img4 : img4Url, 
    //         // img5 : img5Url,
    //         // img6 : img6Url
        
    //     setImg1(null)
    // }

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
                            {data.desc}
                        </p>
                        {data.desc !== null && <FormatQuoteIcon className='icon abs a1'/>}
                        {data.desc !== null && <FormatQuoteIcon className='icon abs a2'/>}
                    </div>
                    <div className="profile-gallery">
                       <div className="profil-grid-item-1 rel-box">
                        <img src={data.miniGallery1 === null ? imgMiniGallery1 : "/upload/" + data.miniGallery1} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>} */}
                        {userId === currentUser.id &&
                        <>
                            <label htmlFor="img1">
                            {/* <AddCircleOutlineIcon className='add'/> */}
                            </label> 
                            {/* <input type="file" name='miniGallery1' id="img1" onChange={e=>setImg1(e.target.files[0])} style={{display:'none'}}/> */}
                            {img1 && <div className="img-abs">
                            <img className='img-abs' src={URL.createObjectURL(img1)} alt="" />
                            </div>}
                            {img1 && <button className='share' onClick={handleSubmitMg}>Update</button>}
                            {img1 && <button className='cancel' onClick={(e)=>setImg1(null)}>Cancel</button>}
                        </>
                        }
                       </div>
                       <div className="profil-grid-item-2 rel-box">
                        <img src={data.miniGallery2 === null ? imgMiniGallery2 : "/upload/" + data.miniGallery2} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>}
                        {userId === currentUser.id && <AddCircleOutlineIcon className='add'/>} */}
                       </div>
                       <div className="profil-grid-item-3 rel-box">
                        <img src={data.miniGallery3 === null ? imgMiniGallery3 : "/upload/" + data.miniGallery3} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>}
                        {userId === currentUser.id && <AddCircleOutlineIcon className='add'/>} */}
                       </div>
                       <div className="profil-grid-item-4 rel-box">
                        <img src={data.miniGallery4 === null ? imgMiniGallery4 : "/upload/" + data.miniGallery4} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>}
                        {userId === currentUser.id && <AddCircleOutlineIcon className='add'/>} */}
                       </div>
                       <div className="profil-grid-item-5 rel-box">
                        <img src={data.miniGallery5 === null ? imgMiniGallery5 : "/upload/" + data.miniGallery5} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>}
                        {userId === currentUser.id && <AddCircleOutlineIcon className='add'/>} */}
                       </div>
                       <div className="profil-grid-item-6 rel-box">
                        <img src={data.miniGallery6 === null ? imgMiniGallery6 : "/upload/" + data.miniGallery6} alt="" />
                        {/* {userId === currentUser.id && <ClearIcon className='icon'/>}
                        {userId === currentUser.id && <AddCircleOutlineIcon className='add'/>} */}
                       </div>  
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
