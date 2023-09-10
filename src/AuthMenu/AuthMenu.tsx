import { Button } from "@material-ui/core";
import { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Unsubscribe } from "redux";
import UserModel from "../Model/UserModel";
import store from "../Redux/Store";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Login from '../Components/Login/Login'
import {CloseModelButton} from './AuthMenuElements'

import "./AuthMenu.css";
import { logoutAction } from "../Redux/AuthState";
import notify from "../service/Notification";
import MenuLan from "./AuthMenuLan";

interface AuthMenuState {
  user: UserModel;
  showLogin: boolean;
  
}

class AuthMenu extends Component<{}, AuthMenuState> {
    
  

  private unsubscribe: Unsubscribe;
  public constructor(props: {}) {
    super(props);
    this.state = {
      user: store.getState().authState.user,
      showLogin:false,
    };
  }

  public loginPopup() {
    console.log(this.state.showLogin);
    this.setState({showLogin:!this.state.showLogin});
  }

  

  public logoutPopup() {
 
        notify.success('logout seccesfully');
        store.dispatch(logoutAction());
        store.getState().couponsState.coupons = [];
        
  }
  
  public componentDidMount(): void {
    store.subscribe(() => {
      this.setState({ user: store.getState().authState.user });
    });
  }

  public componentWillUmount(): void {
    this.unsubscribe();
  }

  public render(): JSX.Element {
    return (
      <div >
        <div className="lala">
          {this.state.showLogin === true ? <div><Login/>
            <CloseModelButton aria-label='Close Model' onClick={() => this.loginPopup() }/>
          </div>:null}
        </div>
      <span className="AuthMenu">
      
        <span className="">
        {this.state.user && (
          <>
          <span> </span>
            <span className="userLogin">
            {this.state.user.type==="ADMINISTRATOR"?<NavLink to="/My-PersonalA" className="normal4"> <span><AccountCircleOutlinedIcon/> </span></NavLink>:null}
            {this.state.user.type==="COMPANY"?<NavLink to="/My-PersonalC" className="normal4"> <AccountCircleOutlinedIcon/> </NavLink>:null}
            {this.state.user.type==="CUSTOMER"?<NavLink to="/My-PersonalCU" className="normal4"> <AccountCircleOutlinedIcon/> </NavLink>:null} <span className="userDetails">Hey {store.getState().authState.user.userName!} </span>
            {/* <button className="btn-login" onClick={() => this.logoutPopup()} >logout</button> */}
            <NavLink to="/logout" className="normal4" >Logout</NavLink> 
            {/* c
            <NavLink to="/Cart" className="Cart" activeClassName="active"><Button variant="contained"  ><ShoppingCartOutlinedIcon/></Button></NavLink> */}
            </span>
          </>
        )}
        {/* English */}
        </span>
            <span >
        {!this.state.user && (
          <>
            <span className="userGust"  >
            <span> </span>
            {/* <NavLink to="/login" className="normal2" activeClassName="active3">Log in</NavLink>  */}
            <button className="btn-login" onClick={() => this.loginPopup()} >Login</button>
            <NavLink to="/register" className="normal3" activeClassName="active3">Sign up</NavLink>
            
            </span>
          </>
        )}
        
        </span>
        
      </span>
      
      </div>
    );
  }
}

export default AuthMenu;




