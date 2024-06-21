import './gallery.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryItem from '../../components/galleryItem/GalleryItem';
import GalleryItems from '../../components/galleryItems/GalleryItems';

const Gallery = () => {
    

  return (
    <div className='gallery'>
        <GalleryItems/>
    </div>
  )
}
export default Gallery
