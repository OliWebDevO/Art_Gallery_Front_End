import React from 'react'
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ClearIcon from '@mui/icons-material/Clear';
import './lightbox.scss'

 const Lightbox = ({ src, userProfilePic, userName, date, userId, onClose, onPrev, onNext }) => {
  
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
                <img src={userProfilePic === null ? profilePicBasic : '/upload/' + userProfilePic} className='img-abs' alt="" />
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

  export default Lightbox

 // Lightbox parameters 

//   const [fileStory, setFileStory] = useState(null)

//   const [currentIndex, setCurrentIndex] = useState(null);

//   const handleClickLb = (index) => {
//   setCurrentIndex(index);
// };

// const handleCloseLb = () => {
//   setCurrentIndex(null);
// };

// const handlePrev = () => {
//   setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
// };

// const handleNext = () => {
//   setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
// };


// {currentIndex !== null && data && (
//     <Lightbox
//       src={data[currentIndex].img}
//       date={data[currentIndex].createdAt}
//       userProfilePic={data[currentIndex].profilePic}
//       userName={data[currentIndex].name}
//       userId={data[currentIndex].userId}
//       data = {data[currentIndex]}
//       onClose={handleCloseLb}
//       onPrev={handlePrev}
//       onNext={handleNext}
//     />
//   )}
