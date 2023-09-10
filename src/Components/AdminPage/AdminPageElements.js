import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TestAll = styled.div`

    height: 100%;
    box-sizing: border-box; /*fix css size bugs*/
    display: grid;
    grid-template-rows: 10% 80% 10%;
    grid-template-columns: repeat(6,1fr);/* fr = Fraction*/

`;



export const AdminPageContainer = styled.div`


    
`;


export const AdminPageWrapper = styled.div`


`;



export const AdminMenuContainer = styled.div`




`;


export const AdminLink = styled(Link)`
    color:black;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.2rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:650;

   
`;
