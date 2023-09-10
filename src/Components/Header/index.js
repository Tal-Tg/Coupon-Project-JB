import React, {useState} from 'react';
import AuthMenu from "../../AuthMenu/AuthMenu";
import {HeaderContainer,HeaderWrap,NavIcon1,HeaderHomePage} from './HeaderElements'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { NavLink, useHistory } from 'react-router-dom';
import store from '../../Redux/Store';

function Header() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
        <HeaderContainer>
            
            <HeaderWrap>
            {/* <HeaderHomePage to="/HomePage"><HomeOutlinedIcon /></HeaderHomePage> */}
                <AuthMenu/> 
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            </HeaderWrap>
        </HeaderContainer>
        </div>
    )
}

export default Header;



