import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const DivForWhiteInUp = styled.p`
    background-color:white;
`;

export const ProductsContainer = styled.div`
     width:100%;
    min-height:5vh;
    height:20%;
    padding:1rem calc((30vw -1300px) /6);
    background:white;
    color:#fff;
    background-color:#e3e3e3;
`;


export const ProductsWrapper = styled.div`
    height:20%;
    background-color:white;
    border-radius: 0% 0% 0% 0%;
   
    // align-items:center;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:0 auto;
    width:100%;
    

    @media screen and (max-width:1300px){
        width:100%;
        
    }
    

`;


export const LinkForProductCard = styled(Link)`
cursor:pointer;
text-decoration:none;
`


export const ProductCard = styled.div`

    border: 1px solid #f2f2f2;
    margin: 40px 0.7vw;
    border-radius: 0% 0% 1% 1%;
    line-height:0;
    width:13.3vw;
    color:black;
    transition: 0.2s;
    box-sizing: inherit;
    outline: none;
    
    &:hover{
    transform: translate(0px,-5px); 
    cursor: pointer;
    text-align: left;
    justify-content: center;
    align-items: center;
    border: 1px solid #42b883;
    box-shadow: 0px 0px 2px black;
    }


    @media screen and(min-width:1px){
        max-width:100rem;
        min-width:100%;
    }
`;

export const ProductImg = styled.img`
    // position:relative;
    border-radius: 0% 0% 0% 0%;
    height:10vw;

    min-width:100%;
    max-width:100%;
    box-shadow:0px 0px 0px black;

    
`;


export const ProductHeading = styled.h1`
    
    height:1vw;
    background-color:white;
    font-size: 1.75417vw;
    //text-align:left;
    margin-top:0rem;
    margin-left:vw;
    margin-bottom:0rem;
    color:black;
    font-family: "Times New Roman", Times, serif;
    text-direction:underline;

`;


export const ProductTitle =  styled.h2`
    margin-top:8%;
    margin-bottom:5px;
    font-family: "Times New Roman", Times, serif;
    font-weight:400;
    font-size:1.5vw;
    color:black;
    float:left;
    width:90%;
    margin-left:1%;
`;

export const ProductInfo = styled.div`
    font-size:0.9vw;
    // position:relative;
    font-family: "Times New Roman", Times, serif;
    display:flex;
    flex-direction:column;
    justify-contect: center;
    // align-items:center;
    padding:0rem;
    text-align:left;
    color:black;

    

`;

export const ProductDesc = styled.p`
    margin-top:7%;
    margin-bottom:1rem;
    color:black;

`;

export const ProductPrice = styled.p`
font-family: "Times New Roman", Times, serif;
margin-bottom:1rem;
font-size:2rem;

`;


export const ProductButton = styled.button`
    font-size:1rem;
    padding: 1rem 4rem;
    border: none;
    background: #394a51;
    color:#fff;
    border: 1px solid white;
    transition:0.2 ease-out;

    &:hover{
        background:white;
        transition:0.2 ease-out;
        cursor:pointer;
        border: 1px solid black;
        color:black;
    }
`;

export const DivAmountDeprecated = styled.div`
        margin-top:16%;
        margin-left:0vw;
        font-weight: 400;
        float:right;
        text-decoration: line-through;
        font-size: 1vw;
        color:#d63447;
    `;

    export const DivAmountDeprecated2 = styled.div`
        margin-top:2%;
        margin-left:0vw;
        font-weight: 400;
        float:right;
        text-decoration: line-through;
        font-size: 1vw;
        
    `;

    export const DivLetterFrom = styled.div`
    margin-top:15%;    
    margin-bottom: 0%;
    font-weight: bold;
    color: #0eb149;
    font-size: 0.9vw;
    float:right;
    margin-left:3%;
    
`;

export const DivLetterFromPrice = styled.span`
    font-size: 1.2vw;
    color: #0eb149;
    font-weight: bold;
    margin-left:0%;
    
`;

export const DivLetterFromPriceIcon = styled.span`
font-size: 0.75vw;
color: #0eb149;
font-weight: bold;

`;

export const DivLocation = styled.div`
    
`;

export const DivAmountBuyers= styled.div`
    margin-top:15%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #0eb149;
    margin-left:0.1vw;
    font-size: 0.9vw;
    height: 5%;
    align-items: center;
    // justify-content: space-between;
    `;

    export const DivAmountBuyersCount= styled.div`
        margin-left:2.5vw;
        font-size: 0.9vw;
        align-items: center;
        justify-content: space-between;
        color: #0eb149;
        // margin-top:2vw;
        display: -webkit-flex;
        display: -ms-flexbox;
    `;