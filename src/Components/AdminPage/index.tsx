import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import UserModel from '../../Model/UserModel';
import './index.css'
import store from '../../Redux/Store';
import notify from '../../service/Notification';
import Footer from '../Footer';
import Header from '../Header';
import { AdminPageContainer,AdminPageWrapper,TestAll } from'./AdminPageElements'
import { AppBar, makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import AdminTab from './Tab';
import TabAdmin from './TabAdmin/TabAdmin';



function AdminPage() {

    
    const history = useHistory();

    useEffect(()=>{
    
        if(!store.getState().authState.user?.type.includes("ADMINISTRATOR")){
            notify.error("Login please");
            history.push("/HomePage")
        }
    })

    
   

    
    return (
    <div className="">
            <Header/>
            <TabAdmin/>
            <Footer/>
            </div>
    )
}

export default AdminPage;
