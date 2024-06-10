import { Link } from 'react-router-dom'
import './comments.scss'
import { useContext, useState } from 'react'
import {AuthContext} from '../../context/authContext'
import { makeRequest } from '../../axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import moment from "moment";

const Comments = ({postId}) => {

    const [desc, setDesc] = useState("")
    const {currentUser} = useContext(AuthContext);

     // React Query pour les comments
    const { isPending, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
        makeRequest.get("/comments?postId=" + postId).then((res) => {
            return res.data;
        })
    });

    

    //React Query
    const queryClient = useQueryClient()
    // Mutations
    const mutation = useMutation({
    mutationFn: (newComment) => {
        return makeRequest.post('/comments', newComment)
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
    })

    const handleClick = async (e) => {
        e.preventDefault()
        //On amène la mutation de react query
        mutation.mutate({desc, postId})
        setDesc("")
      }

    return (
        <div className="comments">
            <div className="write-comment">
                <div className="write-img">
                    <img src={'/upload/' + currentUser.profilePic} alt="" />
                </div>
                <input type="text" value={desc} name="" id="" placeholder='Write a comment' onChange={e => setDesc(e.target.value)} />
                <button onClick={handleClick}>Send</button>
            </div>
            {isPending
              ? "Loading"
              : data.map((comment) => (
                <div className="comment" key={comment.id}>
                    <div className="comment-img">
                        <Link className='comment-user' to={`/profile/${comment.userId}`}>
                            <img src={'/upload/' + comment.profilePic} alt="" />
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
                        <p>{moment(comment.createdAt).fromNow()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Comments