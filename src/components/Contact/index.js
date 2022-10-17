import React from 'react'
import {
    DiscoverContainer,
    DiscoveryWrapper,
    DiscoveryRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Column2,
    ImgWrap,
    Img,
    SubtitleHyperlink
} from './ContactEl';

const ContactForum = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, lightTextDesc, description, description2, description3, img, alt}) => {
  return (
    <>
        <DiscoverContainer lightBg={lightBg} id={id}>
            <DiscoveryWrapper>
                <DiscoveryRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <br/>
                        <SubtitleHyperlink href="https://goo.gl/maps/NEUiPXEFMMe2oSDP9" lightTextDesc={lightTextDesc}>{description}</SubtitleHyperlink>
                        <br/><br/>
                        <SubtitleHyperlink href="tel:416-601-2270" lightTextDesc={lightTextDesc}>{description2}</SubtitleHyperlink>
                        <br/><br/>
                        <SubtitleHyperlink href="mailto: info@pincap.com" lightTextDesc={lightTextDesc}>{description3}</SubtitleHyperlink>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt=""/>
                        </ImgWrap>
                    </Column2>
                </DiscoveryRow>
            </DiscoveryWrapper>
        </DiscoverContainer>
    </>
  )
}

export default ContactForum;