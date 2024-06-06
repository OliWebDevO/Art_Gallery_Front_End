import { Link } from 'react-router-dom'
import './comments.scss'
import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
          "id": 1,
          "name": "Jacques",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 101,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "With a shimmering horn, unicorns can tap into ancient magic, creating miracles and wonders. "
        },
        {
          "id": 2,
          "name": "Batman",
          "img": "https://images.pexels.com/photos/417506/pexels-photo-417506.jpeg",
          "userId": 102,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Being a unicorn is an enchanting experience unlike any other. They inspire legends and tales of hope, embodying purity and strength. "
        },
        {
          "id": 3,
          "name": "John Senna",
          "img": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
          "userId": 103,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "Their days are filled with adventure as they gallop through mystical forests and prance under rainbows. Unicorns have the unique ability to heal and bring joy to those around them."
        },
        {
          "id": 4,
          "name": "Patrick Sebastien",
          "img": "https://images.pexels.com/photos/34950/pexels-photo.jpg",
          "userId": 104,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Their lives are unburdened by the mundane worries that humans face daily. Unicorns communicate with nature, forming bonds with woodland creatures and the elements."
        },
        {
          "id": 5,
          "name": "Pascal Obistro",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 105,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "Unlike humans, unicorns possess a magical aura that exudes beauty and grace. "
        }
      ]

    return (
        <div className="comments">
            <div className="write-comment">
                <div className="write-img">
                    <img src={currentUser.profilePic} alt="" />
                </div>
                <input type="text" name="" id="" placeholder='Write a comment' />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <div className="comment-img">
                        <Link className='comment-user' to={`/profile/${comment.userId}`}>
                            <img src={comment.profilePic} alt="" />
                        </Link>
                    </div>
                    <div className="comment-content">         
                        <Link className='comment-user' to={`/profile/${comment.userId}`}>
                            {comment.name}
                        </Link>
                        <p>
                            {comment.desc}
                        </p>
                    </div>
                    <div className="comment-date">
                        <p>3 mins ago</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Comments