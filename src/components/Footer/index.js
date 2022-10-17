import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterRouter,
    FooterHyperlink,
    WebsiteRights
} from './FooterEl';

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>Miscellaneous Informations</FooterLinkTitle>
                                <FooterRouter to="discover">Discover</FooterRouter>
                                <FooterRouter to="about">About</FooterRouter>
                                <FooterRouter to="/contact">Contact Us</FooterRouter> 
                                <FooterHyperlink href="mailto: info@pincap.com">📩  info@pincap.com</FooterHyperlink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>

                <WebsiteRights>Pinnacle Capital © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer;