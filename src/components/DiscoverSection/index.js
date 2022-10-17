import React from 'react';
import {
    DiscoverContainer,
    DiscoveryWrapper,
    DiscoveryRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img
} from './DiscoverEl';

const DiscoverySection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, lightTextDesc, description, img, alt}) => {
  return (
    <>
        <DiscoverContainer lightBg={lightBg} id={id}>
            <DiscoveryWrapper>
                <DiscoveryRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
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

export default DiscoverySection;