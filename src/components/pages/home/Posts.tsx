import { Avatar, Box, Card, ImageList, ImageListItem } from '@mui/material'
import React, { FC } from 'react'
import { IPost } from '../../../types'
import { Link } from 'react-router-dom'
import { isTemplateExpression } from 'typescript'

interface IPosts {
    posts: IPost[]
}


const Posts: FC<IPosts> = ({posts}) => {
  return <>{posts.map(post => (
    <Box sx ={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: 2,
    }}
    >
        <Link 
                key = {post.author._id}
                to={`/profile/${post.author._id}`} 
                style={{
                    display: 'flex', 
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#111',
                    marginBottom: 4
                    }
                }>
                    <Box sx = {{
                        position: 'relative', 
                        marginRight: 3, 
                        width: 50,
                        height: 50}}
                >
                     <Avatar
                         src ={post.author.avatar} 
                         alt="" 
                         sx = {{width: 46, height: 46}}/>
                    </Box>
                    <div>
                    <span style = {{fontSize: 14.5, fontFamily: 'Verdana'}}>{post.author.name}</span> 
                    <span style = {{fontSize: 14.5, opacity: '0.6'}}>{post.createdAt}</span> 
                    </div>
                </Link>
                <p>{post.content} </p>
                {post?.images?.length && (
                <ImageList variant = 'masonry' cols={3} gap={8}>
                    {post.images.map(image => (
                        <ImageListItem key={image}>
                            <img src={image} alt={''} loading='lazy' />
                        </ImageListItem>
                    ))}
                </ImageList>
                )}
         </Box>
  ))}
  </>
}

export default Posts