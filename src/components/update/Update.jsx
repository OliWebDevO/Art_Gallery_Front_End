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
    const [text, setText] = useState({
        name: "",
        city:"",
        website:"",
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
        //React Query pour le share
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
        coverUrl = coverPic ? await upload(coverPic) : user.coverPic;
        profileUrl = profilePic ? await upload(profilePic) : user.profilePic;
        //On amène la mutation de react query
        mutation.mutate({...text, coverPic: coverUrl, profilePic: profileUrl})
        setOpenUpdate(false)
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
                    <label htmlFor="name"> 
                            <PersonIcon className='icon'/> 
                    </label>
                    <input type="text" name="name" id="name" placeholder='Update your name' onChange={handleChange}/>
                    </div>
                    <div className="form-box">
                    <label htmlFor="city"> 
                            <LocationOnIcon className='icon'/> 
                    </label>
                    <input type="text" name="city" id="city" placeholder='Update your city' onChange={handleChange}/>
                    </div>
                    <div className="form-box">
                    <label htmlFor="website"> 
                            <WebIcon className='icon'/> 
                    </label>
                    <input type="text" name="website" id='website' placeholder='Update your website' onChange={handleChange}/>
                    </div>
                    
                    <button onClick={handleSubmit}>Update</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update
