import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import './stories.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import ClearIcon from '@mui/icons-material/Clear';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Story } from '../story/Story';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Lightbox from '../lightbox/Lightbox';


const Stories = ({userId}) => {

  const {currentUser} = useContext(AuthContext)
  const [fileStory, setFileStory] = useState(null)

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClickLb = (index) => {
  setCurrentIndex(index);
};

const handleCloseLb = () => {
  setCurrentIndex(null);
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
};

    // React Query pour les stories (get)
  const { isPending, error, data } = useQuery({
    queryKey: ['stories'],
    queryFn: () =>
      // makeRequest.get("/stories/").then((res) => {
      makeRequest.get("/stories?userId="+ userId).then((res) => {
        return res.data
      })
  })

  //File upload function
  const uploadStory = async () => {
    try{
      const formData = new FormData();
      formData.append('file', fileStory)
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
    mutationFn: (newStory) => {
      return makeRequest.post('/stories', newStory)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['stories'] })
    },
  })

  const notifyStoryShared = () => toast("Story shared");

  const handleSend = async (e) => {
    e.preventDefault()
    //On apporte le file avec la fct upload de muller
    let imgStoryUrl = '';
    if (fileStory) imgStoryUrl = await uploadStory();

    //On amène la mutation de react query
    mutation.mutate({img: imgStoryUrl})
    setFileStory(null)
    notifyStoryShared()
  }
  const handleCancel = (e) => {
    e.preventDefault()
    setFileStory(null)
  }
 console.log(data)
    return (
        <div className="stories">
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
            {error ? 'Something went wrong' : isPending ? 'Loading'
            : data.map((story, index) => (
              <Story story={story} key={story.id} onClick={() => handleClickLb(index)}/>
            ))}
            {currentIndex !== null && data && (
            <Lightbox
              src={data[currentIndex].img}
              date={data[currentIndex].createdAt}
              userProfilePic={data[currentIndex].profilePic}
              userName={data[currentIndex].name}
              userId={data[currentIndex].userId}
              data = {data[currentIndex]}
              onClose={handleCloseLb}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </div>
    )
}
export default Stories


// {data.map(story => (
//   <div className='story' key={story.id}>
//       <img src={story.img} alt="" />
//   </div>
// ))}



// const Stories = () => {
//   const stories = [
//       {
//           "id": 1,
//           "name": "John Senna",
//           "img": "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
//         },
//         {
//           "id": 2,
//           "name": "Batman",
//           "img": "https://images.pexels.com/photos/34950/pexels-photo.jpg"
//         },
//         {
//           "id": 3,
//           "name": "Jacques",
//           "img": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg"
//         },
//         {
//           "id": 4,
//           "name": "Michel",
//           "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg"
//         }
//   ]
//   return (
//       <div className="stories">
//           <div className="story">
//               <img src="https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg" alt="" />
//               <p>Your Story</p>
//               <div className='add'><AddCircleOutlineIcon className='icon'/></div>
//           </div>
//           {stories.map(story => (
//               <div className='story' key={story.id}>
//                   <img src={story.img} alt="" />
//                   <p>{story.name}</p>
//               </div>
//           ))}
//       </div>
//   )
// }