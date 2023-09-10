import styled from 'styled-components'


export const ContectUsContainer = styled.div`

width:100%;
height:100%;

`

export const ContectUsWrapper = styled.div`
justify-content: center;
text-align:center;
border:2px solid black;
width:90%;
height:100%;
margin:50px;
height:80vh;
`

export const ContectUsHeader = styled.h1`
font-size:40px;
text-decoration:underline;
color:#761a1a;
font-weight:200;
`

export const ContectUsInput =styled.div`

`

export const ContectUsHeaderForTextArea = styled.h3`
color:#761a1a;
font-size:22px;
font-weight:400;
`

export const ContectUsTextArea = styled.input`
   
    -webkit-appearance: textarea;
    border: 3px solid #761a1a;
    font: medium -moz-fixed;
    font: -webkit-small-control;
    height: 88px;
    overflow: auto;
    padding: 2px;
    resize: both;
    width: 400px;
    `

    export const ContectUsSubmit = styled.button`
    margin-top:25px;
    width:200px;
    height:40px;
    color:#283739;
    font-size:15px;
    background:white;
    border:2px solid black;
    border-radius:10px 10px;
    cursor:pointer;
    &:hover{
        background:#761a1a;
        color:white;
    }
    
    `

export const ErrorSpan = styled.span`
    color:tomato;
    font-weight:600;
    font-size:15px;
`