import React from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import './story.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import ClearIcon from '@mui/icons-material/Clear';

export const Story = ({story}) => {
    console.log(story)

  const {currentUser} = useContext(AuthContext)

  // Mutations for story delete
  const deleteStoryMutation = useMutation({
    mutationFn: (storyId) => {
        return makeRequest.delete('/stories/'+ storyId)
    },
    onSuccess: () => {
        // Invalidate and refetch
        QueryClient.invalidateQueries({ queryKey: ['stories'] })
    },
})
const handleDelete = () => {
    deleteStoryMutation.mutate(story.id)
}
  return (
        <div className='story' key={story.id}>
                  <img src={"/upload/" + story.img} alt="" />
                  {story.userId === currentUser.id && <ClearIcon onClick={handleDelete} className='appear'/>}
        </div> 
  )
}