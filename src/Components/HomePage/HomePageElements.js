import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivForOvelFlow = styled.div`

`

export const DivContainer = styled.div`
    background-color:white;
    color:black;
    text-align:center;
    justify-content:center;
    display: flex;
    background-color:#e3e3e3;
    
`;

export const DivWrapper = styled.div`
    border: 0px solid black;
    margin-top:7%;
    text-align:left;
    padding:0px;
    margin:5%;
    width:89vw;
    font-family:'Kanit',sans-serif;
    background-color: white;
    display: inline;
    
`;

export const DivImage = styled.img`

    height:21vw;
    margin:0%;
    // margin-left:2vw;
    // margin-top:3vw;
    // margin-bottom:2vw;
    width:27vw;
    text-align:left;
    font-family:'Kanit',sans-serif;
    display: inline;
`;

export const DivH1 = styled.h1`
    font-size: 1.35417vw;
    text-align:left;
    margin-left:2vw;
    margin-top:2%;
    margin-bottom:2%;


`;

export const DivLink = styled(Link)`
text-decoration:none;
color:black;

`;

export const DivSpan = styled.span`

    flex-basis: 100%;
    width:100%;
    flex-direction:column;
    align-items:flex-start;
    font-weight:bold;
    border:none;
    box-sizing: border-box;
    overflow: hidden;
    float:left;
    font-weight: bold;
    max-width:49%;
    // min-width:100%;
    max-height:100%;
    display: inline;
    padding: 1vw 1vw;
    margin-left:1.2%;
`;

export const DivSpanForTwo = styled.span`
    flex-basis: 100%;
    // margin-left:1%;
    width:100%;
    flex-direction:column;
    align-items:flex-start;
    font-weight:bold;
    border:none;
    box-sizing: border-box;
    overflow: hidden;
    float:left;
    font-weight: bold;
    max-width:49.4%;
    // min-width:100%;
    max-height:100%;
    display: inline;
    padding: 1vw 1vw;
`;

export const DivText = styled.span`
    float:right;
    // margin-left:1vw;
    flex-basis: 100%;
    display: inline;
    // padding: 0 0.5vw;
    
`;

export const DivSpan2 = styled.span`
    width:46%;
    // cursor:pointer;
    flex-basis: 100%;
    cursor:pointer;
`;

export const DivSpanTextHeader = styled.div`
max-height: 80%;
margin: 0;
overflow: hidden;
font-size: 1.15417vw;
color: black;
font-weight: bold;
`;

export const DivSpanText = styled.span`
height: 20%;
line-height:1.5;
flex-grow: 1;
font-size: 0.821vw;
color :grey;
`;

export const DivTextInfo = styled.div`
    font-size: 0.83333vw;
    margin-top:10%;
    overflow: hidden;
`;


export const DivLocation = styled.div`
    
`;

export const DivAmountBuyers= styled.div`
    margin-top:15%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #0eb149;
    font-size: 0.9vw;
    height: 5%;
    align-items: center;
    // justify-content: space-between;
    `;

export const DivAmountBuyersCount= styled.div`
        margin-left:1.8vw;
        font-size: 0.9vw;
        align-items: center;
        justify-content: space-between;
        color: #0eb149;
        // margin-top:2vw;
        display: -webkit-flex;
        display: -ms-flexbox;
    `;

export const DivAmountDeprecated = styled.div`
        margin-top:11%;
        margin-left:1vw;
        font-weight: 400;
        text-decoration: line-through;
        font-size: 1vw;
    `;

export const DivLetterFrom = styled.div`
    margin-top:10%;    
//  margin-bottom: 2%;
    font-weight: bold;
    color: #0eb149;
    font-size: 1vw;
`;

export const DivLetterFromPrice = styled.span`
    font-size: 1.75vw;
    color: #0eb149;
    font-weight: bold;
`;

export const DivLetterFromPriceIcon = styled.span`
font-size: 0.75vw;
color: #0eb149;
font-weight: bold;

`;


export const DivButton = styled.div`
width:11.5vw;
margin-top:15%;    
display: flex;
font-size: 1vw;
height: 2.5vw;
font-weight: bold;
color: white;
background: #0eb149;
align-items: center;
justify-content: center;
cursor:pointer;

&:hover{
    
    background: #0ed149;
}


`;

export const DivButton2 = styled.div`
width:11.5vw;
margin-top:25%;    
display: flex;
font-size: 1vw;
height: 2.5vw;
font-weight: bold;
color: white;
background: #0eb149;
align-items: center;
justify-content: center;
cursor:pointer;

&:hover{
    background: #0ed149;
}


`;


export const SpanForMenuLan = styled.span`
position:fixed;
right:5px;
bottom:72px;
`