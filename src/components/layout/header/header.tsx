import React, { FC } from "react";
import logoImg from './vk-logo.png';
import styles from './Header.module.css';
import { style } from "@mui/system";
import { Search } from "@mui/icons-material";

const Header: FC = () => {
    return (
        <header className = {styles.header}>
            <div className= {styles['image-wrapper']}>
             <img src={logoImg} alt="" />
             </div>
             <div className = {styles.wrapper}>
                 <Search />
            <input type="text" placeholder='Search' />
            </div>
     </header>
    )
}
export default Header