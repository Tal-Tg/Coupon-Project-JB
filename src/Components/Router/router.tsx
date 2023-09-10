
import React from 'react'
import { Route, Router, Switch, useHistory } from 'react-router';
import AdminPage from '../AdminPage';


import CompanyPage from '../CompanyPage';
import ContectUs from '../ContectUs';
import CustomerPage from '../CustomerPage';
import HomePage from '../HomePage/HomePage';


import  Login  from '../Login/Login';
import Logout from '../logout/Logout';
import Page404 from '../Page404';
import Search1 from '../Search';
import SingleCoupon from '../SingleCoupon';
import SlideTest from '../Slider';



function Routing(): JSX.Element {
    const history = useHistory();
    return (
        <div className="Routing">
            <Router history={history}>
                <Switch>
                    <Route path="/HomePage" component={HomePage} exact />
                    <Route path="/My-PersonalA" component={AdminPage} exact />
                    <Route path="/My-PersonalC" component={CompanyPage} exact />
                    <Route path="/My-PersonalCU" component={CustomerPage} exact />
                    <Route path="/Coupon/:id" component={SingleCoupon} exact />
                    <Route path="/Contect-us" component={ContectUs} exact />
                    <Route path="/Logout" component={Logout} exact /> 
                    <Route path="/" component={HomePage} exact /> 
                    <Route component={Page404} exact /> 

                    
                </Switch>
            </Router>
        </div>
    );
}

export default Routing;

