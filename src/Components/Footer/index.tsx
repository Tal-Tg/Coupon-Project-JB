import React from 'react';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'
import{FooterContainer, FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink } from './FooterElements'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/HomePage"> Coupon </SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/index.php" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                    <FaTwitter/>
                                </SocialIconLink>
                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;