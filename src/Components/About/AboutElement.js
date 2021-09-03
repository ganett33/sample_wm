import styled from 'styled-components';
import '../components.css';

export const AboutBox = styled.div`
    width: 100%;

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
    position: absolute;
    font-family: var(--ff-primary);
    color: var(--clr-font1);
    font-size: 4.5rem;

    @media screen and (max-width: 1000px) {
        font-size: 3rem;
    }    

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }
    
`;


export const AbooutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em 1em;
    width: 100%;

`;


export const AboutContent = styled.article`
    padding-top: 60px;
    background: red;
    justify-content: center;
    align-items: center;

`;


export const AboutTitle = styled.h1`
    color: black;


`;

export const AboutSubtitle = styled.h3`
    color: #f1f1f1;


`;

export const AboutText = styled.p`
    color: black;


`;

export const AboutIcon = styled.img`
    padding-top: 60px;
    max-height: 800px;


    opacity: 0.5;


`;