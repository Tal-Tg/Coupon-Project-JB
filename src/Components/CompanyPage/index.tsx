import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import store from '../../Redux/Store';
import notify from '../../service/Notification';
import Footer from '../Footer';
import Header from '../Header';
import { CompanyPageContainer } from './CompanyPageElements'
import TabCompany from './tabCompany/TabCompany';

function CompanyPage() {

    const history = useHistory();
    
    useEffect(()=>{
        if(store.getState().authState.user.type !== "COMPANY"){
            notify.error("Log in please");
            history.push("/HomePage")
    }
    
})


    return (
        <div className="">
            <Header/>
            <TabCompany/>
            <Footer/>
            </div>
    )
}

export default CompanyPage;
