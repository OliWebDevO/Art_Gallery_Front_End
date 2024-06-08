import './post.scss'
import React, { useContext, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from "moment";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/authContext';

const Post = ({post}) => {
    
    const [commentOpen, setCommentOpen] = useState(false);

    const {currentUser} = useContext(AuthContext)
    
     // React Query pour les likes
     const { isPending, error, data } = useQuery({
        queryKey: ['likes', post.id],
        queryFn: () =>
        makeRequest.get("/likes?postId=" + post.id).then((res) => {
            return res.data;
        })
    });
   
    return (
        <div className="post">
            <div className="post-head">
                <Link className='user-link' to={`/profile/${post.userId}`}>
                    <img className='user-img' src={post.profilePic} alt="" />
                </Link>
                <div className="user-infos">
                    <div className="user-info">
                        <Link className='user-link' to={`/profile/${post.userId}`}>
                        <span>{post.name}</span>
                        </Link>
                        <p className='small'>{moment(post.createdAt).fromNow()}</p>
                    </div>
                    <div className="user-infos-icon">
                        <MoreHorizIcon className='icon'/>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <p>{post.desc}</p>
                <img src={'./upload/' + post.img} alt="" />
                <div className="post-reactions">
                    <div className="post-like">
                        {/* {like ? <FavoriteIcon className='icon' style={{color:"red"}}/> : <FavoriteBorderIcon className='icon'/>} */}
                        <span onClick={()=> setLike(!like)} href=""> Likes</span>
                    </div>
                    <div className="post-like">
                        <CommentIcon onClick={()=>setCommentOpen(!commentOpen)} className='icon'/>
                        <span onClick={()=>setCommentOpen(!commentOpen)} href="">Comment</span>
                    </div>
                    <div className="post-like">
                        <ShareIcon className='icon'/>
                        <span href="">Share</span>
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    )
}
export default Post