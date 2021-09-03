import React from 'react';
import '../components.css';
import image from '../../images/about1.jpg';
import icon from '../../images/about2.jpg';
import { 
    AboutBox,
    AboutHeader,
    AboutLogo,
    AboutIcon,
    AbooutWrapper,
    AboutImage,
    AboutContent,
    AboutTitle,
    AboutSubtitle,
    AboutText
} from '../About/AboutElement';


const About = () => {
    return (
        <AboutBox>
            <AboutHeader>
                <AboutImage src={image}/>
                <AboutLogo>WordA'Mouth</AboutLogo>
            </AboutHeader>
            <AbooutWrapper>
                <AboutIcon src={icon}/>
                <AboutContent>
                    <AboutTitle>About Us</AboutTitle>
                    <AboutSubtitle> melong melong</AboutSubtitle>
                    <AboutText>loremipsum</AboutText>
                </AboutContent>

            </AbooutWrapper>
        </AboutBox>
        
    );
}

export default About;
