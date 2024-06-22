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
    
  const notifyGalleryShared = () => toast("Image shared");

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
   setFileGallery(null)
   notifyGalleryShared()
 }
 const handleCancel = (e) => {
   e.preventDefault()
   setFileGallery(null)
 }


  return (
    <div className='update-bg-gallery'>
        <div className="update-container">
            <div className="title">
                <h2>Share your work</h2>
                <button className='cross' onClick={()=>setOpenUpdate(false)}><ClearIcon/></button>
            </div>
            <div className='update-form'>
                <form action="">
                    <div className="update-gallery">
                    {fileGallery === null && 
                        <>
                            <img className='img-gallery' src={imgMiniGallery6} alt="" />
                            <div className='add'>
                                <input type="file" name="" id="fileStory" style={{display:"none"}} onChange={(e) => setFileGallery(e.target.files[0])}/>
                                <label htmlFor="fileStory">
                                    <AddCircleOutlineIcon className='icon icon-abs'/>
                                </label>
                            </div>
                        </>
                        }
                        {fileGallery && <div className="img-abs-update">
                            <img className='fileStory' src={URL.createObjectURL(fileGallery)} alt="" />
                            </div>}
                        {fileGallery && <button className='share' onClick={handleSubmit}>Share</button>}
                        {fileGallery && <button className='cancel' onClick={handleCancel}>Cancel</button>}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateGallery
