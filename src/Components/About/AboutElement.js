import styled from 'styled-components';
import '../components.css';

export const AboutBox = styled.div`
    width: 100%;
    max-height: 1500px;

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
    background-color: black;
    padding: 5px 10px;
    position: absolute;
    font-family: var(--ff-secondary);
    color: white;
    font-size: 4.5rem;

    @media screen and (max-width: 810px) {
        font-size: 3rem;
    }    

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }
    
`;

export const Content = styled.div`
    text-align: left;
    margin: 10 auto;
`;


export const AboutContent = styled.article`
    padding: 60px;
    margin-left: 200px;
    height: 600px;
    overflow-y: scroll;

    @media screen and (max-width: 1010px) {
        padding: 40px;
        margin-left: 100px;
    }

    @media screen and (max-width: 850px) {
        padding: 30px;
        height: 500px;
    }
    @media screen and (max-width: 350px) {
        padding: 10px;
    }

`;


export const AboutSubtitle = styled.h3`
    display: inline-block;
    color: var(--clr-accent);
    font-family: var(--ff-primary);
    font-size: 2.4rem;
    padding: 30px 0 40px 0;

    @media screen and (max-width: 810px) {
        font-size: 1.5rem;
        padding: 15px 0 20px 0;
    }
    @media screen and (max-width: 520px) {
        padding: 10px 0 15px 0;
        font-size: 1.2rem;
    }
`;

export const AboutText = styled.p`
    font-family: var(--ff-secondary);
    font-size: 2rem;
    color: black;
    padding-bottom: 10px;

    @media screen and (max-width: 850px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.1rem;
    }
`;
