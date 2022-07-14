import React, { FC } from "react";
import logoImg from './vk-logo.png';
import style from './Header.module.css';

import { Search } from "@mui/icons-material";

const Header: FC = () => {
    return (
        <header className = {style.header}>
            <div className= {style['image-wrapper']}>
             <img src={logoImg} alt="" />
             </div>
             <div className = {style.wrapper}>
                 <Search />
            <input type="text" placeholder='Search' />
            </div>
     </header>
    )
}
export default Header