import React, { useState } from 'react'
import './shareGallery.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imgMiniGallery6 from '../../assets/gallery/gallery40.jpeg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UpdateGallery from '../updateGallery/UpdateGallery';


export const ShareGallery = () => {


  const [openUpdate, setOpenUpdate] = useState(false)

  return (
    <>
          <ImageListItem
                // onClick={}
                className="img"
                key={0}
              >
                <img
                  srcSet={`${imgMiniGallery6}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${imgMiniGallery6}?w=248&fit=crop&auto=format`}
                  alt="Post your img"
                  loading="lazy"
                />
                
                 <ImageListItemBar
              title="Share"
              // subtitle={}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  aria-label={`info about post your img`}
                >
                    <AddCircleOutlineIcon onClick={()=>setOpenUpdate(true)} className='icon'/>

                </IconButton>
              }
            />
              </ImageListItem>

              {openUpdate && <UpdateGallery setOpenUpdate={setOpenUpdate} />}
    </>
  )
}
