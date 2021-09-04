import React from 'react';
import '../components.css';
import image from '../../images/about1.jpg';
import { 
    AboutBox,
    AboutHeader,
    AboutLogo,
    AboutImage,
    AboutContent,
    AboutTitle,
    AboutSubtitle,
    AboutText,
    Content
} from '../About/AboutElement';


const About = () => {
    return (
        <AboutBox>
            <AboutHeader>
                <AboutImage src={image}/>
                <AboutLogo>Word A'Mouth</AboutLogo>
                <AboutTitle>About us</AboutTitle>
            </AboutHeader>
                <AboutContent>
                    <Content>
                    <AboutSubtitle>share hidden places with people</AboutSubtitle>
                    <AboutText>
                    Ham hock leberkas chicken dolore strip steak, drumstick lorem do irure voluptate shoulder.
                    </AboutText>
                    <br />
                    <AboutText>
                    Duis beef ribs sint, ribeye nisi venison pork belly landjaeger in meatball. Ut qui in laboris fatback venison, adipisicing duis proident ipsum short loin. Doner sunt do exercitation pancetta.
                    </AboutText>
                    <br />
                    <AboutText>
                    Ham hock leberkas chicken dolore strip steak, drumstick lorem do irure voluptate shoulder.
                    </AboutText>
                    </Content>
                </AboutContent>
        </AboutBox>
        
    );
}

export default About;
