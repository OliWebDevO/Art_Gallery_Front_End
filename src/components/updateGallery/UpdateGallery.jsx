import React, { useState } from 'react'
import './updateGallery.scss'
import { makeRequest } from '../../axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import PersonIcon from '@mui/icons-material/Person';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import imgMiniGallery6 from '../../assets/gallery/gallery40.jpeg'

const UpdateGallery = ({setOpenUpdate}) => {
    

  const [fileGallery, setFileGallery] = useState(null)
  const [title, setTitle] = useState('')

  //File upload function
  const uploadGallery = async () => {
   try{
     const formData = new FormData();
     formData.append('file', fileGallery)
     const res = await makeRequest.post('/upload', formData);
     return res.data
   }catch(err){
     console.log(err)
   }
 }
  //React Query pour le share (add)
  const queryClient = useQueryClient()
  // Mutations
  const mutation = useMutation({
   mutationFn: (newGallery) => {
     return makeRequest.post('/gallery', newGallery)
   },
   onSuccess: () => {
     // Invalidate and refetch
     queryClient.invalidateQueries({ queryKey: ['galleryItems'] })
   },
 })

 const handleChange = (e) => {
    setText((prev)=> ({...prev, [e.target.name] : [e.target.value]}))
}

 const handleSubmit= async (e) => {
   e.preventDefault()
   //On apporte le file avec la fct upload de muller
   let imgGalleryUrl = '';
   if (fileGallery) imgGalleryUrl = await uploadGallery();

   //On amène la mutation de react query
   mutation.mutate({img: imgGalleryUrl})
   setFileStory(null)
   notifyStoryShared()
 }
 const handleCancel = (e) => {
   e.preventDefault()
   setFileStory(null)
 }


  return (
    <div className='update-bg'>
        <div className="update-container">
            <div className="title">
                <h2>Share your work</h2>
                <button className='cross' onClick={()=>setOpenUpdate(false)}><ClearIcon/></button>
            </div>
            <div className='update-form'>
                <form action="">
                <div className="story">
                <img src="https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg" alt="" />
                <p>Your Story</p>
                <div className='add'>
                  <input type="file" name="" id="fileStory" style={{display:"none"}} onChange={(e) => setFileStory(e.target.files[0])}/>
                  <label htmlFor="fileStory">
                    <AddCircleOutlineIcon className='icon'/>
                  </label>
                </div>
                {fileStory && <div className="img-abs">
                  <img className='fileStory' src={URL.createObjectURL(fileStory)} alt="" />
                </div>}
                {fileStory && <button className='share' onClick={handleSend}>Share</button>}
                {fileStory && <button className='cancel' onClick={handleCancel}>Cancel</button>}
            </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateGallery
