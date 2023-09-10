import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import CouponModel from '../../Model/CouponModel';
import store from '../../Redux/Store';
import Footer from '../Footer';
import Header from '../Header';
import {
    SingleCouponContainer, SingleCouponWrapper, SingleCouponImg, SingleCouponHeader,
    SingleCouponSpanForHeader, SingleCouponDiv,SingleCouponDescriptionText,SingleCouponDescription, SingleCouponDivForDescriptionDetails,SingleCouponPrice, SingleCouponPriceText, SingleCouponDivForPriceDetails, SingleCouponBtn
    ,SingleCouponDivForTitleDetails,SingleCouponTitleText,SingleCouponTitle} from './SingleCouponElements'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

interface RouteParam {
    id: string;
}
interface singleCouponDetailsProps extends RouteComponentProps<RouteParam> {

}


function SingleCoupon(c: singleCouponDetailsProps) {

    const [coupon, setCoupon] = useState<CouponModel>();
    const[count , setCount] = useState(-1);

    const [id, setId] = useState("");
    useEffect(() => {
        getCoupon();
    })


    async function getCoupon() {
        if(store.getState().guestState.coupons.length > count) {
            setId(c.match.params.id)
            const response = await axios.get("http://localhost:8080/guest/coupon/" + id);
            setCoupon(response.data);
            setCount(store.getState().guestState.coupons.length);
        }
        
    }

    const history = useHistory();

    function goToCustomer(){
        history.push("/My-PersonalCU")
    }

    return (
        <div>
            <Header />
          
            <SingleCouponContainer>
                <SingleCouponWrapper>
                    <SingleCouponDiv>
                        <SingleCouponSpanForHeader> <SingleCouponHeader>{coupon?.description}</SingleCouponHeader></SingleCouponSpanForHeader>
                        <SingleCouponImg src={coupon?.image} />
                        <SingleCouponDivForPriceDetails><SingleCouponPrice><SingleCouponPriceText>Price</SingleCouponPriceText> - {coupon?.price} ₪ </SingleCouponPrice></SingleCouponDivForPriceDetails>
                        <SingleCouponDivForDescriptionDetails><SingleCouponDescription>Description<SingleCouponDescriptionText> - </SingleCouponDescriptionText>{coupon?.description}</SingleCouponDescription> </SingleCouponDivForDescriptionDetails>
                        <SingleCouponDivForTitleDetails><SingleCouponTitle>Title<SingleCouponTitleText> - </SingleCouponTitleText>{coupon?.description}</SingleCouponTitle> </SingleCouponDivForTitleDetails>
                        <SingleCouponBtn onClick={() => goToCustomer()} >Purchase </SingleCouponBtn>
                    </SingleCouponDiv>

                </SingleCouponWrapper>
            </SingleCouponContainer>
            <Footer />
        </div>

    )
}

export default SingleCoupon;