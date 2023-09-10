
import { BrowserRouter, Link, Router } from 'react-router-dom'
import { GlobalStyle } from '../../globalStyle'
import { DivContainer,DivLocation,DivAmountBuyersCount,
    DivSpanForTwo,DivAmountBuyers, DivWrapper,DivImage,
    DivSpan,DivH1,DivText,DivSpan2,DivSpanText,DivSpanTextHeader,
    DivTextInfo,DivAmountDeprecated,DivLetterFrom,
    DivLetterFromPrice, DivLetterFromPriceIcon,DivButton,DivButton2,DivLink,SpanForMenuLan
 ,DivForOvelFlow} from './HomePageElements'

import Feature from '../Feature'
import Footer from '../Footer'
import Header from '../Header'
import Hero from '../Hero'
import { Products } from '../Products'

import {FaChevronLeft} from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import './index.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import store from '../../Redux/Store'
import axios from 'axios'
import { GuestDownloadedAction } from '../../Redux/GuestState'
import tokenAxios from '../../Interceptor/Interceptor'
import MenuLan from '../../AuthMenu/AuthMenuLan'








function HomePage() {

    const [homePageCoupon, setHomePageCoupons] = useState(store.getState().guestState.coupons);
    const[count, setCount] = useState(-1);

    useEffect(() => {
       sendGetCoupon();
    })

    async function sendGetCoupon() {
        if(count < store.getState().guestState.coupons.length){
            const response = await axios.get("http://localhost:8080/guest/coupon");
            store.dispatch(GuestDownloadedAction(response.data));
            setCount(store.getState().guestState.coupons.length);
            setHomePageCoupons([response.data])
        }else{

        }
    }

    function moreInfoBtn(){

    }





    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <DivForOvelFlow>
            <Hero />
            <DivContainer>
                <DivWrapper>   
                <DivH1>Don't Miss </DivH1>
                {store.getState().guestState.coupons.filter((c) => c.id === 1).map((index, item) => {
                    return(
                    <DivSpan key={index.id}>
                     <DivLink to={"/coupon/"+index.id}> 
                    <DivSpan2 key={index.id} >
                        <DivImage src={index.image} alt=""/>
                        <DivText > 
                        <DivSpanTextHeader>Vegetables from the <br /> supermarket </DivSpanTextHeader>
                        <DivSpanText> Eliran Supermarket  </DivSpanText>
                        <DivTextInfo>  enjoy from all the services of<br /> supermarket including, fruits<br /> </DivTextInfo>
                        <DivAmountBuyers><DivLocation><img className="imgForLocation" src="https://media.groo.co.il/_media/images/header/icon-location.png"/></DivLocation>&nbsp; {index.location}  <DivAmountBuyersCount>Bought:&nbsp;502+</DivAmountBuyersCount></DivAmountBuyers>
                        <DivAmountDeprecated>202₪</DivAmountDeprecated>
                        <DivLetterFrom>from- <DivLetterFromPrice> 54</DivLetterFromPrice> <DivLetterFromPriceIcon> ₪</DivLetterFromPriceIcon> </DivLetterFrom>
                        <DivButton>More info</DivButton>
                        </DivText>
                    </DivSpan2 >
                    </DivLink>  
                    </DivSpan>
                        );
                    })}
                    {store.getState().guestState.coupons.filter((c) => c.id === 2).map((index, item) => {
                    return(
                    <DivSpanForTwo key={index.id}>
                         <DivLink to={"/coupon/"+index.id}>
                    <DivSpan2 key={index.id}>
                        <DivImage src={index.image} alt=""/>
                        <DivText > 
                        <DivSpanTextHeader>Biyanka Beach </DivSpanTextHeader>
                        <DivSpanText> Dead Sea </DivSpanText>
                        <DivTextInfo>  You don't have to book a night  <br /> at the hotel to enjoy a fun day ,<br />in the Dead Sea: a pool, a ,<br /> children's petting area, free , <br />mud, hiking trails and more. <br /> </DivTextInfo>
                        <DivAmountBuyers><DivLocation><img className="imgForLocation" src="https://media.groo.co.il/_media/images/header/icon-location.png"/></DivLocation>&nbsp; {index.location}  <DivAmountBuyersCount>Bought:&nbsp;1028+</DivAmountBuyersCount></DivAmountBuyers>
                        <DivLetterFrom>from- <DivLetterFromPrice> 88</DivLetterFromPrice> <DivLetterFromPriceIcon> ₪</DivLetterFromPriceIcon> </DivLetterFrom>
                        <DivButton2>More info</DivButton2>
                        </DivText>
                    </DivSpan2 >
                    </DivLink>
                    </DivSpanForTwo>
                    );
                })}
                </DivWrapper>
            </DivContainer>
            <Products heading='New on *Coupon*' data={store.getState().guestState.coupons.filter((c) => c.id >=3 && c.id <=8)}/>
            <Products heading='User Selecting' data={store.getState().guestState.coupons.filter((c) => c.id >=9 && c.id <=14)}/>
            <Products heading='Sport' data={store.getState().guestState.coupons.filter((c) => c.id >=15 && c.id <=20)}/>
            <Products heading='Attractions' data={store.getState().guestState.coupons.filter((c) => c.id >=21 && c.id <=26)}/>
            <Feature/>
            <Products heading='Home and Garden' data={store.getState().guestState.coupons.filter((c) => c.id >=27 && c.id <=32)}/>
            <SpanForMenuLan><MenuLan/></SpanForMenuLan>
            </DivForOvelFlow>
            <Footer/>
        </div>
    )
}

export default HomePage;




