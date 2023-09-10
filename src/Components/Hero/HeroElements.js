import styled from 'styled-components'
import coupon from '../../images/HeroPhoto2.jpg'

export const HeroContainer = styled.div`

    background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${coupon});
    height:85vh;
    width:100%;
    background-position:center;
    background-size:cover;
    background-color:white;
    font-family:'Kanit',sans-serif;

    `;


export const HeroContent = styled.div`
height:calc(100vh-80px);
max-height:100%;
width:80%;

padding: 1rem calc((100vw - 1300px) /2);
`;

export const HeroItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    height:100%;
    margin-left:4%;
    max-height:100%;
    padding:0 2erm;
    width:95%;
    color:#fff;
    text-transform:uppercase;
    line-height:1;
    font-weight:bold;

    @media screen and(max-width: 650px){
        width:100%;
    }
    
`;

export const HeroH1 = styled.div`
    // font-size:clamp(2.5rem,10vw, 5rem );
    width:44%;
    font-size:4vw;
    margin-bottom:2rem;
    box-shadow:3px 6px  #394a51;
    letter-spacing:3px;


`;


export const HeroP = styled.div`
    font-size:clamp(2rem,2.5vw, 3rem );
    margin-bottom:2rem;
    

`;


export const HeroBtn = styled.button`
    font-size:1.4rem;
    padding:1rem 4rem;
    border:none;
    background:#394a51;
    color:#fff;
    transition:0.2s ease-out ;

    &:hover{
        background:white;
        transition:0.2s ease-out ;
        curser:pointer;
        color:#000;
    }

`;