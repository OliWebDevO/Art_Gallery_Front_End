import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSwipeable } from 'react-swipeable';
import './galleryItems.scss'
import { AuthContext } from '../../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import GalleryItem from '../galleryItem/GalleryItem';
import { ShareGallery } from '../shareGallery/ShareGallery';
import CommentIcon from '@mui/icons-material/Comment';
import moment from "moment";
import { Link } from 'react-router-dom';

const Lightbox = ({ src, userProfilePic, userName, date, userId, onClose, onPrev, onNext }) => {
  const {currentUser} = useContext(AuthContext);
    const handlers = useSwipeable({
        onSwipedLeft: () => onNext(),
        onSwipedRight: () => onPrev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Enable mouse swiping
      });
    return (
      <div className="lightbox" onClick={onClose} {...handlers}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <img className='img-lb' src={"/upload/" + src} alt="Enlarged" />
          <button className="prev-button" onClick={onPrev}><NavigateBeforeIcon className='icon'/></button>
          <button className="next-button" onClick={onNext}><NavigateNextIcon className='icon'/></button>
           
           
            <div className="black-box">
            <Link to={`/profile/` + userId} className="left-banner">
              <img src={'/upload/' + userProfilePic} className='img-abs' alt="" />
              <span className='img-username'>{userName}</span>
              <span className='img-date'>{moment(date).fromNow()}</span>
            </Link>
            <div className="right-banner">
              <FavoriteBorderIcon className='img-like'/>
              <CommentIcon className='img-comment'/>
            </div>
            </div>
        </div>
      </div>
    );
  };

const GalleryItems = ({userId}) => {

  const {currentUser} = useContext(AuthContext);
    const [currentIndex, setCurrentIndex] = useState(null);

  
    const handleClick = (index) => {
      setCurrentIndex(index);
    };
  
    const handleClose = () => {
      setCurrentIndex(null);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    // React Query pour les posts
    const { isPending, error, data } = useQuery({
      queryKey: ['galleryItems'],
      queryFn: () =>
        makeRequest.get("/gallery?userId="+ userId).then((res) => {
          return res.data
        })
    })
    console.log(data)
  return (
    <>
     <Box className='box'
        sx={{
          '& .MuiMasonryItem-root': {
            width: '100%', // Use full width of the container
          },
          '& .MuiMasonryItem-root': {
            height: '100%', // Use full width of the container
          },
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
        
        <ShareGallery/>

        { error 
            ? 'Something went wront' 
            : isPending 
            ? 'Loading' 
            : data.map((galleryItem, index) => <GalleryItem galleryItem={galleryItem} key={galleryItem.id} onClick={() => handleClick(index)} />)}
        </ImageList>
  
  {currentIndex !== null && data && (
    <Lightbox
      src={data[currentIndex].img}
      date={data[currentIndex].createdAt}
      userProfilePic={data[currentIndex].profilePic}
      userName={data[currentIndex].name}
      userId={data[currentIndex].userId}
      onClose={handleClose}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  )}
</Box>
    </>
  )
}

export default GalleryItems




// const Lightbox = ({ src, userProfilePic, userName, onClose, onPrev, onNext }) => {
//   const {currentUser} = useContext(AuthContext);
//     const handlers = useSwipeable({
//         onSwipedLeft: () => onNext(),
//         onSwipedRight: () => onPrev(),
//         preventDefaultTouchmoveEvent: true,
//         trackMouse: true, // Enable mouse swiping
//       });
//     return (
//       <div className="lightbox" onClick={onClose} {...handlers}>
//         <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//           <img className='img-lb' src={"/upload/" + src} alt="Enlarged" />
//           <button className="prev-button" onClick={onPrev}><NavigateBeforeIcon className='icon'/></button>
//           <button className="next-button" onClick={onNext}><NavigateNextIcon className='icon'/></button>
//            <img src={'/upload/' + userProfilePic} className='img-abs' alt="" />
//             <span className='img-username'>{userName}</span>
//             <div className="black-box"></div>
//         </div>
//       </div>
//     );
//   };