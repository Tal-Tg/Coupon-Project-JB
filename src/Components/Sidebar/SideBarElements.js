import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
justify-content: center;
    position: fixed;
    z-index:999;
    width:350px;
    height:100%;
    background:#97cba9;
    display:flex;
    align-items:center;
    top:0;
    transition:0.3s ease-in-out;
    right:${({isOpen}) => (isOpen?'0' :'-1000px') };

    @media screen and (max-width:400px){
        width:100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color:#000;
    cursor:pointer;
    
`;

export const Icon = styled.div`
    cursor:pointer;
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    border:transparent;
    font-size:2rem;
    curser:pointer;
    outline:none;
`;


export const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(4, 80px);
    text-align:center;
    
   
    @media screen and (max-width:480px){
        grid-template-rows:repeat(4 , 60px);
    }

`;


export const SidebarLink = styled(Link)`
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    color:#000;
    cursor:pointer;

    &:hover{
        color:#e31837;
        transition:0.2s ease-in-out;

    }
`;

export const SideBtnWrap = styled.div`

    margin-top:100%;
    display:flex;
    justify-contect:center;
    
    


`;

export const SidebarRoute = styled(Link)`

    background:#394a51;
    white-space:nowrap;
    padding:16px 64px;
    font-size:16px;
    outline:none;
    border:none;
    color:white;
    transition:0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:0.2s ease-in-out;
        background: #fff;
        color:black;

        
    }
`;