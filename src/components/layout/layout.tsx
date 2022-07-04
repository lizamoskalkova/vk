//import React, { FC} from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import {Button} from '@mui/material';
import { Grid } from '@mui/material';
import * as React from 'react';

type Props = {
  children?: React.ReactNode
};
const Layout: React.FC<Props> = ({children}) => {
    return (
    <>
     <Header /> 
     <Grid container spacing={2} marginX = {5} marginTop = {2}>
    <Grid item md={2}>
        <Sidebar/>
    </Grid>
    <Grid item md={10}>
     {children}
     </Grid>
     </Grid>
</>
)}


export default Layout