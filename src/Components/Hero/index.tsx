import React, {useState} from 'react'
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroElements'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import Search1 from '../Search'
import { useHistory } from 'react-router'


const Hero = () => {
    const history = useHistory();
    // const [isOpen,setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    function sendToPurchase(){
        history.push("/My-PersonalCU")
    }

    return (
        <HeroContainer>
            
            <HeroItems>
                    <HeroH1>Discover great Coupons </HeroH1>
                    <HeroP> Just Buy & Enjoy </HeroP>
                    <HeroBtn onClick={() => sendToPurchase()}> Place Order </HeroBtn>
                </HeroItems>
            {/* <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/> */}
            
        </HeroContainer>
    )
}

export default Hero;

<HeroContent>
                <HeroItems>
                    <HeroH1>Discover great food </HeroH1>
                    <HeroP> Just Order & Enjoy </HeroP>
                    <HeroBtn> Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>