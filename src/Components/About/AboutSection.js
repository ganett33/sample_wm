import React from 'react';
import '../components.css';
import image from '../../images/about1.jpg';
import { 
    AboutBox,
    AboutHeader,
    AboutLogo,
    AboutImage,
    AboutContent,
    AboutSubtitle,
    AboutText,
    Content
} from '../About/AboutElement';


const About = () => {
    return (
        <AboutBox>
            <AboutHeader>
                <AboutImage src={image}/>
                <AboutLogo>About us</AboutLogo>
            </AboutHeader>
                <AboutContent>
                    <Content>
                    <AboutSubtitle>share hidden places with people</AboutSubtitle>
                    <AboutText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin egestas arcu. Nulla at eleifend sapien. Nulla sagittis ligula velit, eget aliquet ante lobortis ac. Proin viverra rhoncus ipsum et pretium. 
                    </AboutText>
                    <br />
                    <AboutText>
                    Vivamus metus massa, facilisis vel sagittis et, egestas quis sapien. Nam porttitor tempor ultrices. Etiam pretium velit ex, vel fringilla urna viverra et. In porttitor justo eu diam euismod interdum. Donec laoreet eget massa sagittis fringilla. Sed sagittis vitae nunc eu dignissim. 
                    </AboutText>
                    <br />
                    <AboutText>
                    Sed lobortis, nisl in imperdiet egestas, odio dolor volutpat turpis, nec malesuada urna mauris quis velit. Etiam mattis arcu justo, eu mattis ex convallis scelerisque. Nulla condimentum molestie ante sit amet pellentesque. Phasellus in lacinia metus. Nulla molestie laoreet laoreet. Pellentesque a porta nisl, vel pulvinar tortor.
                    </AboutText>
                    </Content>
                </AboutContent>
        </AboutBox>
        
    );
}

export default About;
