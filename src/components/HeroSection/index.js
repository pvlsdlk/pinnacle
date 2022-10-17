import React, {useState} from 'react';
import Video from '../../videos/bg_video.mp4';
import {Button} from '../ButtonEl';
import { 
    HeroContainer, 
    HeroOverlay,
    HeroBG, 
    VideoBG,
    HeroContent,
    HeroH1,
    HeroP,
    HeroButtonWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroEl';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer>
            <HeroBG>
                <HeroOverlay />
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBG>

        <HeroContent>
            <HeroH1>Perform, Protect, Prosper</HeroH1>
            <HeroP> Pinnacle Capital is a leading private investor and business accelerator that leverages the experience, insights, and resources of its founder, Mr. Arif N. Bhalwani, an accomplished entrepreneur and investor.</HeroP>
            <HeroButtonWrapper>
                <Button smooth={true} duration={500} exact='true' offset={-80} to="discover" onMouseEnter={onHover} onMouseLeave={onHover}>
                    See more {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroButtonWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;