import React, { useState } from 'react'
import './update.scss'
import { makeRequest } from '../../axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'


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
                <button className='cross' onClick={()=>setOpenUpdate(false)}>❌</button>
            </div>
            <div className="update-form">
                <form action="">
                    <input type="file" name="" id="" onChange={e=>setCoverPic(e.target.files[0])} />
                    <input type="file" name="" id="" onChange={e=>setProfilePic(e.target.files[0])} />
                    <input type="text" name="name" placeholder='Update you name' onChange={handleChange} />
                    <input type="text" name="city" placeholder='Update you city' onChange={handleChange} />
                    <input type="text" name="website" placeholder='Update you website' onChange={handleChange} />
                    <button onClick={handleSubmit}>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update
