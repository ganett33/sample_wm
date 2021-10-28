import styled from 'styled-components';
import '../components.css';

export const AboutBox = styled.div`
    width: 100%;
    height: auto;

`;

export const AboutHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const AboutImage = styled.img`
    display: flex;
    width: 100%;
    max-height: 600px;
    opacity: 0.7;

`;

export const AboutLogo = styled.span`
    padding: 5px 10px;
    position: absolute;
    font-family: var(--ff-primary);
    -webkit-text-stroke: 3px black;
    color: white;
    font-size: 4.5rem;
    
    @media screen and (max-width: 520px) {
        font-size: 3rem;
  }
`;

export const Content = styled.div`
    text-align: left;
`;


export const AboutContent = styled.article`
    padding: 50px;
    margin-left: 80px;
`;


export const AboutSubtitle = styled.h3`
    display: inline-block;
    color: var(--clr-accent);
    font-family: var(--ff-primary);
    font-size: 3.5rem;
    padding: 30px 0 40px 0;

    @media screen and (max-width: 520px) {
        font-size: 2rem;
  }
`;

export const AboutText = styled.p`
    font-family: var(--ff-secondary);
    font-size: 2rem;
    color: black;
    padding-bottom: 10px;

    @media screen and (max-width: 520px) {
        font-size: 1.5rem;
  }

`;
