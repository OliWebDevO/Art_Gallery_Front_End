import './gallery.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryComponent from '../../components/gallery/GalleryComponent';

const Gallery = () => {
    

  return (
    <div className='gallery'>
        <GalleryComponent/>
    </div>
  )
}
export default Gallery
