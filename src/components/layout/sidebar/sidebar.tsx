import React, { FC } from "react";
import {Box}  from '@mui/system';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserItems from "./UserItem";
import Menu from "./Menu";


const Sidebar: FC = () => {
    return (
        
        <div>
            <UserItems/>
            <Menu />
        </div>
    )
}
export default Sidebar