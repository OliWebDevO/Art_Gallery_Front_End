import './stories.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Stories = () => {
    const stories = [
        {
            "id": 1,
            "name": "John Senna",
            "img": "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
          },
          {
            "id": 2,
            "name": "Batman",
            "img": "https://images.pexels.com/photos/34950/pexels-photo.jpg"
          },
          {
            "id": 3,
            "name": "Jacques",
            "img": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg"
          },
          {
            "id": 4,
            "name": "Michel",
            "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg"
          }
    ]
    return (
        <div className="stories">
            <div className="story">
                <img src="https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg" alt="" />
                <p>Your Story</p>
                <div className='add'><AddCircleOutlineIcon className='icon'/></div>
            </div>
            {stories.map(story => (
                <div className='story' key={story.id}>
                    <img src={story.img} alt="" />
                    <p>{story.name}</p>
                </div>
            ))}
        </div>
    )
}
export default Stories









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