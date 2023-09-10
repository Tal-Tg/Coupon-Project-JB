import React from 'react'
import {ProductsContainer,ProductHeading,ProductsWrapper,ProductCard,
    ProductImg,
    ProductInfo,DivAmountBuyersCount,DivLocation,DivLetterFromPrice,DivLetterFromPriceIcon,
    DivLetterFrom,DivAmountDeprecated,LinkForProductCard,DivAmountBuyers, ProductTitle,ProductDesc,ProductPrice,ProductButton,DivForWhiteInUp
} from './ProductsElements';
import Carousel from "react-elastic-carousel";
import{ useState } from 'react'
import "./index.css";





export const Products = ({heading, data}) => {
    
    return (
        <ProductsContainer>
            <DivForWhiteInUp>.</DivForWhiteInUp>
            <ProductHeading> &nbsp;&nbsp;&nbsp;&nbsp;{heading}</ProductHeading>
            <ProductsWrapper>
            {data.map((product, index) => {
                return(
                    <LinkForProductCard to={"/coupon/"+product.id}>
                    <ProductCard key={index} >
                        <ProductImg src={product.image} alt={product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.title} <DivAmountDeprecated>{product.alt}₪</DivAmountDeprecated></ProductTitle>
                            <DivLetterFrom>from- <DivLetterFromPrice> {product.price}</DivLetterFromPrice> <DivLetterFromPriceIcon> ₪</DivLetterFromPriceIcon> </DivLetterFrom>
                            <DivAmountBuyers><DivLocation><img className="imgForLocation" src="https://media.groo.co.il/_media/images/header/icon-location.png"/></DivLocation>&nbsp; {product.location}  <DivAmountBuyersCount>Bought:&nbsp;{product.bought}+&nbsp;  </DivAmountBuyersCount></DivAmountBuyers>
                            {/* <ProductDesc>{product.desc}</ProductDesc> */}
                            {/* <ProductPrice>{product.price}</ProductPrice> */}
                            {/* <ProductButton>{product.button}</ProductButton> */}
                        </ProductInfo>
                    </ProductCard>
                    </LinkForProductCard>
                
                );
            })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}


