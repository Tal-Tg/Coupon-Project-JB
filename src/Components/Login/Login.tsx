import { MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, NavLink, useHistory } from 'react-router-dom'
import tokenAxios from '../../Interceptor/Interceptor';
import CredentialsModel from '../../Model/CredentialsModel';
import { loginAction } from '../../Redux/AuthState';
import store from '../../Redux/Store';
import notify from '../../service/Notification';
import Footer from '../Footer'
import Header from '../Header'
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import SmsIcon from '@material-ui/icons/Sms';
import { CloseModelButton,Background,LoginWrap,LoginContainer,LoginBtnSubmit,LoginBtnFacebook,LoginBtnApple,LoginBtnSms,LoginSpanError } from './LoginElements';
import {useRef,useEffect,useCallback} from 'react';
import { useSpring, animated } from 'react-spring';





function Login() {

    
    

    const history = useHistory();

   
    
    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>({
        mode: "onTouched"
    })

    async function send(credential: CredentialsModel) {
        const data = {
            "email": credential.email,
            "password": credential.password,
            "type": credential.type,
        }
        if(credential.type === "ADMINISTRATOR"){
        try {
            const response = await tokenAxios.post("http://localhost:8080/admin/login", credential);
            store.dispatch(loginAction(response.data));
            notify.success('Login successfully');
            history.push("/a");
            return history.push("/HomePage");
        } catch (err : any) {
            notify.error(err);
        }
        }else if(credential.type === "COMPANY"){
            try {
                const response = await tokenAxios.post("http://localhost:8080/company/login", credential);
                store.dispatch(loginAction(response.data));
                notify.success('Login successfully');
                
                history.push("/a");
                return history.push("/HomePage");
            } catch (err) {
                notify.error("Wrong user name or password");
            }
        }else if(credential.type === "CUSTOMER"){
            try {
                const response = await tokenAxios.post("http://localhost:8080/customer/login", credential);
                store.dispatch(loginAction(response.data));
                notify.success('Login successfully');
                history.push("/a");
                return history.push("/HomePage");
            } catch (err) {
                notify.error("Wrong user name or password");
            }
        }
    }
    
    const modelRef = useRef();
    
    const animation = useSpring({
        config:{
            duration:250
        },
        opacity:1,
        
    })


    return (
        
        <Background ref={modelRef}>
            <animated.div style={animation}>
        <LoginWrap>
            <br />
            {/* <div >
                <NavLink className="normal" to="/">&nbsp;&nbsp;&nbsp; HomePage / <NavLink className="normal"  to="/login"> Login</NavLink></NavLink>
            </div> */}
            <LoginContainer >
            {/* <br /><br />
                    <h1 className="line"> Login </h1>
                    
                    <hr className="hr1" />
                    <br />
                    <LoginBtnFacebook color="primary" className="btn-submitFacbook" > <div className="text"><FacebookIcon /> Login By Facebook </div> </LoginBtnFacebook>
                    <br />
                    <br />
                    <hr className="hr1" />
                    <br />
                    <LoginBtnApple color="primary" className="btn-submitApple" > <div className="text"><AppleIcon /> Login By Apple </div> </LoginBtnApple>
                    <br />
                    <br />
                    <hr className="hr1" />
                    <br />
                    <LoginBtnSms color="primary" className="btn-submitSms" > <div className="text"><SmsIcon />&nbsp; Login By SMS </div> </LoginBtnSms>
                    <br />
                    <br />
                    <hr className="hr1" /> */}
                    <br />
                    <br />
                    <form onSubmit={handleSubmit(send)}>
                    <h1 className="line"> Login </h1>
                    <br />
                    <hr className="hr1" />
                    <br />
                    <label htmlFor="email"></label>
                    <TextField
                        className="input1"
                        id="outlined-basic" label="User Name" variant="outlined"
                        type="text"
                        required
                        {...register("email", { required: { value: true, message: "missing user name" }, minLength: { value: 3, message: " user name is to short" }, maxLength: { value: 25, message: "first name is to long" } })}
                    />
                    <br />
                    <LoginSpanError >{errors.email?.message}</LoginSpanError>
                    <br />
                    <label htmlFor="password"></label>
                    <TextField
                        id="outlined-basic" label="Password" variant="outlined"
                        type="password"
                        className="input1"
                        required
                        {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 2, message: " password is to short" }, maxLength: { value: 25, message: "password is to long" } })}
                    />
                    <br />
                    <LoginSpanError >{errors.password?.message}</LoginSpanError>
                    <br />
                    <br />
                    <label htmlFor="type">Please select your type <br /><br /></label>
                    <Select
                        
                        className="type"
                        labelId="type"
                        id="type"
                        {...register("type", { required: { value: true, message: "missing type" } })}
                    >
                        <MenuItem value={"ADMINISTRATOR"} defaultValue="administrator" key="ADMIN">Administrator</MenuItem>
                        <MenuItem value={"COMPANY"}  key="COMPANY">Company</MenuItem>
                        <MenuItem value={"CUSTOMER"} key="CUSTOMER">Customer</MenuItem>
                    </Select>
                    <br />
                    <LoginSpanError>{errors.type?.message}</LoginSpanError>
                    <label htmlFor="btn-login"></label>
                    <br />
                    <br />
                    <LoginBtnSubmit color="primary" className="btn-submit1" >Login</LoginBtnSubmit>
                    <br />
                    <br />
                    <p className="message">Forgot password?<Link to="/register"> Click here</Link> </p>
                    <br />
                    </form>
                </LoginContainer>
            
        </LoginWrap>
        </animated.div>
        </Background>
    )
}

export default Login


