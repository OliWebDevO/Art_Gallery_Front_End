import React, { useState } from 'react'
import './update.scss'
import { makeRequest } from '../../axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import PersonIcon from '@mui/icons-material/Person';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

const Update = ({setOpenUpdate, user}) => {
    
  
    const [coverPic, setCoverPic] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [img3, setImg3] = useState(null)
    const [img4, setImg4] = useState(null)
    const [img5, setImg5] = useState(null)
    const [img6, setImg6] = useState(null)
    const [text, setText] = useState({
        name: user.name || "",
        city: user.city || "",
        website: user.website || "",
        desc: user.desc || "",
    })

      //File upload function
    const upload = async (file) => {
        try{
        const formData = new FormData();
        formData.append('file', file)
        const res = await makeRequest.post('/upload', formData);
        return res.data
        }catch(err){
        console.log(err)
        }
    }

    const handleChange = (e) => {
        setText((prev)=> ({...prev, [e.target.name] : [e.target.value]}))
    }
        //React Query pour l'update
    const queryClient = useQueryClient()
    // Mutations
    const mutation = useMutation({
    mutationFn: (user) => {
        return makeRequest.put('/users', user)
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        //On apporte le file avec la fct upload de muller
        let coverUrl 
        let profileUrl 
        let img1Url
        let img2Url
        let img3Url
        let img4Url
        let img5Url
        let img6Url
        coverUrl = coverPic ? await upload(coverPic) : user.coverPic;
        profileUrl = profilePic ? await upload(profilePic) : user.profilePic;
        img1Url = img1 ? await upload(img1) : user.miniGallery1;
        img2Url = img2 ? await upload(img2) : user.miniGallery2;
        img3Url = img3 ? await upload(img3) : user.miniGallery3;
        img4Url = img4 ? await upload(img4) : user.miniGallery4;
        img5Url = img5 ? await upload(img5) : user.miniGallery5;
        img6Url = img6 ? await upload(img6) : user.miniGallery6;
        const updatedData = {
            name: text.name || user.name,
            city: text.city || user.city,
            website: text.website || user.website,
            desc: text.desc || user.desc,
            coverPic: coverUrl,
            profilePic: profileUrl,
            miniGallery1: img1Url,
            miniGallery2: img2Url,
            miniGallery3: img3Url,
            miniGallery4: img4Url,
            miniGallery5: img5Url,
            miniGallery6: img6Url,
        };
        //On amène la mutation de react query
        mutation.mutate(updatedData)
        setOpenUpdate(false)
        // mutation.mutate({...text, miniGallery1: coverUrl, profilePic: profileUrl})
        // setOpenUpdate(false)
    }

  return (
    <div className='update-bg'>
        <div className="update-container">
            <div className="title">
                <h2>Update your profile</h2>
                <button className='cross' onClick={()=>setOpenUpdate(false)}><ClearIcon/></button>
            </div>
            <div className="update-form">
                <form action="">
                    <div className="profile-update-box">
                        <div className="profile-infos">
                            <div className="form-box">
                                <label htmlFor="profile">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Profile Picture
                                </label>
                                <input type="file" name="profilePic" id="profile" onChange={e=>setProfilePic(e.target.files[0])} style={{display:'none'}}/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="cover">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Cover Picture
                                </label>
                                <input type="file" name="coverPic" id="cover" onChange={e=>setCoverPic(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img1">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 1
                                </label>
                                <input type="file" name="miniGallery1" id="img1" onChange={e=>setImg1(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img2">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 2
                                </label>
                                <input type="file" name="miniGallery2" id="img2" onChange={e=>setImg2(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img3">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 3
                                </label>
                                <input type="file" name="miniGallery3" id="img3" onChange={e=>setImg3(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img4">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 4
                                </label>
                                <input type="file" name="miniGallery4" id="img4" onChange={e=>setImg4(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img5">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 5
                                </label>
                                <input type="file" name="miniGallery5" id="img5" onChange={e=>setImg5(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="img6">
                                    <AddCircleOutlineIcon className='icon'/>
                                    Mini Gallery 6
                                </label>
                                <input type="file" name="miniGallery6" id="img6" onChange={e=>setImg6(e.target.files[0])} style={{display:'none'}} />
                            </div>
                            <div className="form-box">
                                <label htmlFor="name">
                                        <PersonIcon className='icon'/>
                                </label>
                                <input type="text" name="name" id="name" placeholder='Your name' onChange={handleChange}/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="city">
                                        <LocationOnIcon className='icon'/>
                                </label>
                                <input type="text" name="city" id="city" placeholder='Your city' onChange={handleChange}/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="website">
                                        <WebIcon className='icon'/>
                                </label>
                                <input type="text" name="website" id='website' placeholder='Your website' onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="profile-desc">
                            <textarea type="text" name="desc" id="desc" placeholder='Your description' onChange={handleChange}/>
                        </div>
                    </div>   
                    <button onClick={handleSubmit}>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update
