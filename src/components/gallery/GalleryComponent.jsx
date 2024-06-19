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
import './gallery.scss'
import { AuthContext } from '../../context/authContext';


const Lightbox = ({ src, onClose, onPrev, onNext }) => {
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
          <img className='img-lb' src={src} alt="Enlarged" />
          <button className="prev-button" onClick={onPrev}><NavigateBeforeIcon className='icon'/></button>
          <button className="next-button" onClick={onNext}><NavigateNextIcon className='icon'/></button>
           <img src={'/upload/' + currentUser.profilePic} className='img-abs' alt="" />
            <span className='img-username'>{currentUser.name}</span>
            <div className="black-box"></div>
        </div>
      </div>
    );
  };

  export default function GalleryComponent() {

    const {currentUser} = useContext(AuthContext);
    const [currentIndex, setCurrentIndex] = useState(null);

  
    const handleClick = (index) => {
      setCurrentIndex(index);
    };
  
    const handleClose = () => {
      setCurrentIndex(null);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? itemData.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === itemData.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
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
          {itemData.map((item, index) => (
            <ImageListItem
              onClick={() => handleClick(index)}
              className="img"
              key={item.id}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                
              />
               <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <FavoriteBorderIcon />
              </IconButton>
            }
          />
             
            </ImageListItem>
          ))}
        </ImageList>
  
        {currentIndex !== null && (
          <Lightbox
            src={itemData[currentIndex].img}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </Box>
    );
  }

const itemData = [

  {
    id : '1',
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    title: 'Coffee',
    author: '@nolanissac',
    imgartist: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
  },
  { id : '2',
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    title: 'Coffee',
    author: '@nolanissac',
  },
  { id : '3',
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    title: 'Coffee',
    author: '@nolanissac',
  },
  { id : '4',
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    title: 'Coffee',
    author: '@nolanissac',
  },
  { id : '5',
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    title: 'Coffee',
    author: '@nolanissac',
  },
  { id  : '6',
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    title: 'Coffee',
    author: '@nolanissac',
  },
  { id : '7',
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  { id : '8',
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  { id  : '9',
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  { id : '10',
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {id : '11',
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  { id : '12',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];