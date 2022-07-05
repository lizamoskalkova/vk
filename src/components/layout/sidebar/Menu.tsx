import React from 'react'
import { Card } from '@mui/material';
import { Avatar } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {QuestionAnswer} from '@mui/icons-material';
import {Box}  from '@mui/system';
import {Link, useHistory} from 'react-router-dom';
import { menu } from './menu/dataMenu';

const Menu = () => {
    
  const history = useHistory();
  return (
    <Card sx = {{
        padding: 2,
        backgroundColor: '#F6F6F6',
    }}>
    <List>
        {menu.map(item => (
       <ListItem key = {item.link} disablePadding>
         <ListItemButton onClick={() => history.push(item.link)}>
          <ListItemIcon>
            <item.icon />
           </ListItemIcon>
          <ListItemText primary = {item.title}/>
         </ListItemButton>
        </ListItem>))}
     </List>
    
    </Card>
    
  )
}

export default Menu