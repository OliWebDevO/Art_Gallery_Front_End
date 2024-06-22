import React, { useContext } from 'react'
import GalleryItems from '../../components/galleryItems/GalleryItems'
import { ToastContainer } from 'react-toastify'
import './myGallery.scss'
import { AuthContext } from '../../context/authContext'
import { useLocation } from 'react-router-dom'

 const MyGallery = () => {

    //Cherche le numéro de l'utilisateur dans l'url
    const userId = parseInt(useLocation().pathname.split("/")[2])
  return (
    <div className='my-gallery'>
         <GalleryItems userId={userId}/>
         <ToastContainer/>
    </div>
  )
}
export default MyGallery