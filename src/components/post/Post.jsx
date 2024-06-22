import './post.scss'
import React, { useContext, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ClearIcon from '@mui/icons-material/Clear';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Lightbox from '../lightbox/Lightbox';
import imgMiniGallery1 from '../../assets/gallery/gallery1.jpeg'

const Post = ({ post }) => {
    
    const {currentUser} = useContext(AuthContext)
    const [rotation, setRotation] = useState("")
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickParamsPost = () => {
        setRotation("iconRotation")
        rotation === "iconRotation" && setRotation("")
        setMenuOpen(!menuOpen)
    }

     // React Query pour les likes
     const { isPending, error, data } = useQuery({
        initialData:[],
        queryKey: ['likes', post.id],
        queryFn: () =>
        makeRequest.get("/likes?postId=" + post.id).then((res) => {
            return res.data;
        })
    });
    //React Query
    const queryClient = useQueryClient()
    // Mutations for likes
    const mutation = useMutation({
        mutationFn: (liked) => {
            if(liked) return makeRequest.delete('/likes?postId=' + post.id)
            return makeRequest.post('/likes', { postId: post.id })
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['likes'] })
        },
    })

    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))
    }

    // Mutations for post delete
    const deleteMutation = useMutation({
        mutationFn: (postId) => {
            return makeRequest.delete('/posts/'+ postId)
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
    })

    // toastify
    const notifyPostDelete = () => toast("Post deleted");

    const handleDelete = () => {
        deleteMutation.mutate(post.id)
        notifyPostDelete()
    }

    // Lightbox parameters 

      const [currentIndex, setCurrentIndex] = useState(null);

      const handleClickLb = (index) => {
      setCurrentIndex(index);
    };

    const handleCloseLb = () => {
      setCurrentIndex(null);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? post.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === post.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="post">
            <div className="post-head">
                <Link className='user-link' to={`/profile/${post.userId}`}>
                    <img className='user-img' src={post.profilePic === null ? profilePicBasic :'/upload/' + post.profilePic} alt="" />
                </Link>
                <div className="user-infos">
                    <div className="user-info">
                        <Link className='user-link' to={`/profile/${post.userId}`}>
                        <span>{post.name}</span>
                        </Link>
                        <p className='small'>{moment(post.createdAt).fromNow()}</p>
                    </div>
                    <div className="user-infos-icon">
                        <MoreHorizIcon onClick={handleClickParamsPost} className={rotation + " icon"}/>
                        {menuOpen && post.userId === currentUser.id && <button onClick={handleDelete} className='icon-btn'><ClearIcon/></button>}
                    </div>
                </div>
            </div>
            <div className="post-content">
                <p>{post.desc}</p>
                <img onClick={() => handleClickLb(index)} src={'/upload/' + post.img} alt="" />
                <div className="post-reactions">
                    <div className="post-like">
                        {isPending ? "Loading" : data.includes(currentUser.id) ? (
                        <FavoriteIcon className='icon' style={{color:"red"}} onClick={handleLike}/>
                        ) : ( 
                        <FavoriteBorderIcon className='icon'onClick={handleLike}/>
                        )}
                        <span>{data.length} like{data.length >=2 && "s"}</span>
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
            {currentIndex !== null && post && (
                <Lightbox
                src={post.img}
                date={post.createdAt}
                userProfilePic={post.profilePic}
                userName={post.name}
                userId={post.userId}
                data = {post}
                onClose={handleCloseLb}
                onPrev={handlePrev}
                onNext={handleNext}
                />
            )}           
        </div>
    )
}
export default Post