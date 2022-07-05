import React from 'react';
import {Box}  from '@mui/system';
import {Link, useHistory} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Card } from '@mui/material';
import { Avatar } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {QuestionAnswer} from '@mui/icons-material';
import { IUser } from '../../../types';
import { users } from './dataUsers';



const UserItems = () => {

  const history = useHistory();
  return (

            <Card sx = {{
                padding: 2,
                backgroundColor: '#F6F6F6',
                border: 'none',
                borderRadius: 3,
            }}
            >
            {users.map(user => ( 
                <Link 
                key = {user._id}
                to={`/profile/${user._id}`} 
                style={{
                    display: 'flex', 
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#111',
                    marginBottom: 4}}>
                    <Box sx = {{
                    position: 'relative', 
                    marginRight: 3, 
                    width: 50,
                    height: 50}}>
                     <Avatar
                         src ={user.avatar} 
                         alt="" 
                         sx = {{width: 46, height: 46}}/>
                    {user.isInNetwork &&
                    <Box sx = {{backgroundColor: 'green', 
                    border: '2 px white',
                    width: 10, 
                    height:10, 
                    position: 'absolute', 
                    borderRadius: 2,
                    bottom: 7, 
                    right: 7}}/>
                    }</Box>
                    <span style = {{fontSize: 14.5, fontFamily: 'Verdana'}}>{user.name}</span> 
                </Link>))}
            <List>
               <ListItem disablePadding>
                 <ListItemButton onClick={() => history.push('/messages')}>
                  <ListItemIcon>
                    <QuestionAnswer/>
                   </ListItemIcon>
                  <ListItemText primary = 'Inbox'/>
                 </ListItemButton>
                </ListItem>
             </List>
            </Card>
  )
}

export default UserItems