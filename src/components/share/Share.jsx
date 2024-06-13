import './share.scss'
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import React from 'react'


export const Share = () => {


  //File upload function
  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append('file', file)
      const res = await makeRequest.post('/upload', formData);
      return res.data
    }catch(err){
      console.log(err)
    }
  }

    //React Query pour le share
    const queryClient = useQueryClient()
    // Mutations
    const mutation = useMutation({
     mutationFn: (newPost) => {
       return makeRequest.post('/posts', newPost)
     },
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries({ queryKey: ['posts'] })
     },
   })

  // State & userContext pour le share
  const {currentUser} = useContext(AuthContext)
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState("")

  const handleClick = async (e) => {
    e.preventDefault()
    //On apporte le file avec la fct upload de muller
    let imgUrl = '';
    if (file) imgUrl = await upload();

    //On amène la mutation de react query
    mutation.mutate({desc, img: imgUrl})
    setDesc("")
    setFile(null)
  }

  return (
    <>
         <div className="my-post">
            <div className="post-text">
                <div className="left">
                  <img src={'/upload/' + currentUser.profilePic} alt="" />
                  <textarea name="" id="" value={desc} placeholder={` What's on your mind ? ${currentUser.name}`} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <div className="right">
                  {file &&  <img className='file' src={URL.createObjectURL(file)} alt="" />}
                </div>
            </div>
            <div className="message">
                <div className="options">
                  <input type="file" name="" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                  <label htmlFor="file">
                    <ImageIcon className='icon'/>
                  </label>
                  {/* <CameraAltIcon className='icon'/> */}
                </div>
                <div className="send-msg">
                  <button onClick={handleClick}>Share</button>
                </div>
            </div>
        </div>
    </>
  )
}
