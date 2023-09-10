import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import store from '../../Redux/Store';
import notify from '../../service/Notification';
import Footer from '../Footer';
import Header from '../Header';
import {CustomerPageElements} from './CustomerPageElements';
import TabCustomer from './tabCustomer/TabCustomer';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

function CustomerPage() {
    
    return (
        <div>
            <Header/>
            <TabCustomer/>
            <Footer/>
        </div>
    )
}

export default CustomerPage;
