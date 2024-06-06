import './post.scss'
import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

const Post = ({post}) => {
    
    const [like, setLike] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    


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
                        <p className='small'>a few seconds ago</p>
                    </div>
                    <div className="user-infos-icon">
                        <MoreHorizIcon className='icon'/>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
                <div className="post-reactions">
                    <div className="post-like">
                        {like ? <FavoriteIcon onClick={()=> setLike(!like)} className='icon'/> : <FavoriteBorderIcon onClick={()=> setLike(!like)} className='icon'/>}
                        <span onClick={()=> setLike(!like)} href="">Like</span>
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
                {commentOpen && <Comments/>}
            </div>
        </div>
    )
}
export default Post