import styled from 'styled-components';


export const DivForNothing = styled.div`
    color:#e3e3e3;
    background-color:#e3e3e3;

`;
// url(${FeaturesPic})
export const FeatureContainer = styled.div`
    background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url("https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    margin-top:0vw;
    height:80vh;
    
    max-height:650px;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    text-align:center;
    padding:0 1rem;
    justify-content: center;
    

h1{
    font-size:clamp(5rem, 5vw, 5rem);
}

p{
    font-size:clamp(2rem, 3vw, 2rem);
}

`;


export const FeatureButton = styled.button`
    font-size:1.4rem;
    margin-top:2%;
    padding: 0.6rem 3rem;
    border:none;
    background:#394a51;
    color:white;
    transition: 0.2 ease-out;

    &:hover{
        
        color:black;
        background:white;
        transition: 0.2s ease-out;
        border:0px solid black;
        cursor:pointer;
    }

`;

