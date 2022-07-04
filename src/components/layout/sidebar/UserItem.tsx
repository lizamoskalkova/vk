import React from 'react';
import {Box}  from '@mui/system';
import {Link, useHistory} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Card } from '@mui/material';
import { Avatar } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {QuestionAnswer} from '@mui/icons-material';

const users = [
    {
        avatar: 'https://yt3.ggpht.com/HJja4fRDTqAovm9EJXCf6TR18MdXmYQ-6lSk7dgtwa6EG05cqx2Ssef-fV1tod8fklXOWmSM=s900-c-k-c0x00ffffff-no-rj',
        name: 'Liza Moskalkova',
        isInNetwork: false,
        _id: 'a',
    },
    {
        avatar: '',
        name: 'Masha Moskalkova',
        isInNetwork: false,
        _id: 'sa',
    },
    {
        avatar: 'https://mir-s3-cdn-cf.behance.net/user/276/6dbcd7194160285.5eb049203363a.png',
        name: 'Anna Moskalkova',
        isInNetwork: true,
        _id: 'af',
    },
    {
        avatar: '',
        name: 'Ella Moskalkova',
        isInNetwork: false,
        _id: 'ad',
    }
]


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
                    marginRight: 2, 
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
                    <span style = {{fontSize: 17}}>{user.name}</span> 
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