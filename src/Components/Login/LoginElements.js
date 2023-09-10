import styled from 'styled-components';
import {MdClose} from 'react-icons/md'


export const Background = styled.div`
  width:100%;
  height:150%;
  background: rgb(0,0,0,0.8);
  background-position: center;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  // background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url("https://load77.exelator.com/pixel.gif");
  position:fixed;
  display:block;
  justify-content:center;
  align-items:center;
  
  
`;


export const ModelWrapper= styled.div`
  width:800px;
  height:500px;
  box-shadow:0 5px 16px rgba(0,0,0,0.2);
  background:#fff;
  color:#000;
  display:grid;
   grid-template-columns:1fr 1fr;
  position:relative;
  z-index:100%;
  // border-radius:10px;
`;

export const CloseModelButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    // top:20px;
    // right:20px;
    width:32px;
    height:32px
    padding:0;
    z-index:10;
    `;


export const LoginWrap = styled.div`
    //background-color:white;
    font-family:'Kanit',sans-serif;
    
    width:100vw;
    height:100vh;
    justify-content:center;
    // margin-left:26vw;
    border-radius:5px 5px 5px 5px;
    // box-sizing: border-box;
`;




export const LoginContainer = styled.div`

width:100%;
// height:80%;
display: flex;
flex-flow: column;
align-items: center;
text-align: center;
border: 0px solid rgb(15, 15, 15);
background-color: white;
color: rgb(53, 53, 53);
padding: 0%;
margin-left:33.5%;
margin-top: 3%;
margin-bottom: 0%;
width:30%;
display: inline-block;
border-radius: 8px 8px 8px 8px;
box-shadow: 0 2px 2px rgb(0,0,0,.5);
font-family:'Kanit',sans-serif;



`;


export const LoginBtnSubmit = styled.button`

border: none;
outline: 0;
  background-color: #000000da; 
  border-radius: 3px;
  color: rgb(255, 255, 255); 
  padding: 10px 10px;
  font-size: 100%;
  z-index: 100000;
  margin-top:10px;
  display:inline;
  margin-bottom: 5px;
  text-align: center;
  width: 60%;
  cursor: pointer;
  height: 40px;
`;

export const LoginBtnFacebook = styled.button`

border: none;
    outline: 0;
    background-color: #27508d; 
    border-radius: 3px;
    color: rgb(255, 255, 255); 
    padding: 10px 10px;
    font-size:130%;
    display:inline;
    margin-bottom: 0px;
    text-align: center;
    width: 60%;
    cursor: pointer;
    height: 42px;
    border-radius: 5px 5px;
`;

export const LoginBtnApple = styled.button`
font-size:130%;
border: none;
  outline: 0;
  background-color: #000000; 
  border-radius: 3px;
  color: rgb(255, 255, 255); 
  padding: 10px 10px;
  
  display:inline;
  margin-bottom: 0px;
  text-align: center;
  width: 60%;
  cursor: pointer;
  height: 42px;
  border-radius: 5px 5px;
`;

export const LoginBtnSms = styled.button`
font-size:130%;
border: none;
  outline: 0;
  background-color: #10c55c; 
  border-radius: 3px;
  color: rgb(255, 255, 255); 
  padding: 10px 10px;
  
  display:inline;
  margin-bottom: 0px;
  text-align: center;
  width: 60%;
  cursor: pointer;
  height: 42px;
  border-radius: 5px 5px;
`;

export const LoginSpanError = styled.span`

    color:red;
`;