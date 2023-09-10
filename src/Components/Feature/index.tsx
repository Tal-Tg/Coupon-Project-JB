import React from 'react'
import { useHistory } from 'react-router';
import {FeatureContainer,FeatureButton,DivForNothing} from './FeatureElements'

const Feature = () => {

    const history = useHistory();


    function getFuture(){
        history.push("/coupon/5")
    }


    return (
        <div>
        <DivForNothing>.</DivForNothing>
        <DivForNothing>.</DivForNothing>
        <FeatureContainer>
            <h1> Future in Coupons </h1>
            <p> As close as heaven gets: So we all know that caribbean enjoy.</p>
            <FeatureButton onClick={() => getFuture()}>Order Now</FeatureButton>
        </FeatureContainer>
        <DivForNothing>.</DivForNothing>
        <DivForNothing>.</DivForNothing>
        </div>
    )
}

export default Feature;
