import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const HeaderContainer = styled.header`
background-color:black;
border:4px solid white;
width:100%;
height:4.4rem;
border:0px solid black;

@media screen and (max-width:1300px){
    width:100%;
    
}

`;

export const NavIcon = styled.div`

    cursor:pointer;
    display:block;
    position:absolute;
    top:2%;
    right:0%;
    curser:pointer;
    color:#fff;
    

    p{
    transform: translate(-175%, 100%);
    font-weight:bold;
    
}
`;

export const HeaderWrap = styled.div`
color:white;
padding:26px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
max-width:1300px;
margin:5 auto;

@media screen and (max-width:1300px){
    width: 100%;
}
`;


export const HeaderHomePage = styled(Link)`
    color:white;
    position:fixed;
    top:27px;
    left:15px;
    margin-right:10px;


`


 