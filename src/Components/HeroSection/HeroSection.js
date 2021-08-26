import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Btn} from '../ButtonElement';
import { 
    HeroBox, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroElements';

export const HeroSection = () => {
    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroBox >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} tpye='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Looking&ensp;for&ensp;Hidden Places ?</HeroH1>
                <HeroP>
                    Hidden places in Mt. Maunganui this week.
                </HeroP>
                <HeroBtnWrapper>
                    <Btn to="sign-up" onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Look First {hover ? <ArrowForward /> : <ArrowRight />}
                    </Btn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroBox>
    )
}

export default HeroSection; 