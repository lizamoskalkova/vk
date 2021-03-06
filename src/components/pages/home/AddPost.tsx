import { Box, TextField } from '@mui/material'
import React, {FC, useState, KeyboardEvent} from 'react'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUsers';


interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}


const AddPost: FC <IAddPost> = ({setPosts}) => {
  
 const [content, setContent] = useState<string>('');
 const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
   if (e.key == 'Enter')
    {
      setPosts(prev => [
      {
        author: users[0],
        content,
        createdAt: '5 minutes ago',
    },
    ...prev,
  ])
    setContent('');
  }
 }
 return (
    <Box sx ={{
        border: '1px solid #ccc',
        borderRadius: '70px',
    }}
    >
    <TextField 
    variant = 'outlined' 
    label = 'how are you?'
    InputProps = {{
    sx: { border: '1px solid #ccc',
    borderRadius: '25px'}}}
    sx =  {{width: '100%'}}
    onKeyPress={addPostHandler}
    onChange = {e => setContent(e.target.value) }
    value = {content}
    />
    </Box>
  )
}

export default AddPost