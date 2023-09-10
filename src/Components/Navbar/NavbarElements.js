import styled from 'styled-components'
import {NavLink as List } from 'react-router-dom'
import { ImPriceTag } from "react-icons/im";

export const Nav = styled.nav`

    background: transparent;
    height:100px;
    display:flex;
    justify-content:center;
    font-weight:700;
    
`;

export const NavLink = styled(List)`
cursor:pointer;
    color:#fff;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-align:center;
    text-decoration:none;
    curser:pointer;
    
    @media screen and (min-width: 400px) {
        
        top:10px;
        left:25px;
    }
`;

export const NavIcon = styled.div`
    cursor:pointer;
    display:block;
    position:absolute;
    top:5.5%;
    right:0%;
    curser:pointer;
    color:#fff;
    

    p{
    transform: translate(-175%, 100%);
    font-weight:bold;
    
}
`;


export const Bars = styled(ImPriceTag)`
    color:white;
    cursor:pointer;
    font-size:2rem;
    transform:translate(-45% ,-45%);
`;