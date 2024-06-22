import './gallery.scss'
import * as React from 'react';
import GalleryItems from '../../components/galleryItems/GalleryItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Gallery = () => {
    

  return (
    <div className='gallery'>
        <GalleryItems/>
        <ToastContainer/>
    </div>
  )
}
export default Gallery
