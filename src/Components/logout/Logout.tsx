import { SlowBuffer } from "buffer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../Redux/AuthState";
import store from "../../Redux/Store";
import notify from "../../service/Notification";



function Logout(): JSX.Element {

    const history = useHistory();

    useEffect(()=> 
    { 
        notify.success('logout successfully');
        store.dispatch(logoutAction());
        store.getState().couponsState.coupons = [];
        store.getState().adminState.companies =[];
        store.getState().adminCustomerState.customers =[];
        store.getState().authState.user = null;
        store.getState().companyState.coupons = [];
        store.getState().customerState.couponVsCustomer = [];
        history.push("/HomePage");
    });

    return (
        <></>
    );
}

export default Logout;