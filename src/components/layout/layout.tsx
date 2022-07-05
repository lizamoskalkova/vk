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
     <Grid container spacing={2} paddingX = {5} marginTop = {2}>
    <Grid item md={3}>
        <Sidebar/>
    </Grid>
    <Grid item md={9}>
     {children}
     </Grid>
     </Grid>
</>
)}


export default Layout