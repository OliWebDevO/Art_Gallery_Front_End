import './posts.scss'
import Post from '../post/Post';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Posts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts").then((res) => {
        return res.data
      })
  })
  
    return (
        <div className="posts">
            {/* <div className="my-post">
              <div className="post-text">
                <img src="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <textarea name="" id="" placeholder=" What's on your mind ? "></textarea>
              </div>
              <div className="message">
                <div className="options">
                  <ImageIcon className='icon'/>
                  <CameraAltIcon className='icon'/>
                </div>
                <div className="send-msg">
                  <button>Send</button>
                </div>
              </div>
            </div> */}

            { error 
            ? 'Something went wront' 
            : isPending 
            ? 'Loading' 
            : data.map((post) => <Post post={post} key={post.id}/>)}

        </div>
    )
}
export default Posts