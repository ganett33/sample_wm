import styled from 'styled-components';
import '../components.css'

export const ReviewsBox = styled.div`
    font-family:var(--ff-secondary);
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`;


export const ReviewsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    paddig: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr ;
    }

`;

export const ReviewsCard = styled.div`
    background: var(--clr-sub);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transfrom: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ReviewsIcon = styled.img`
    height: 180px;
    width: 300px;
    margin-bottom: 10px;
`;


export const ReviewH1 = styled.h1`
    font-family:var(--ff-primary);
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;

    }
`;

export const ReviewH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`;

export const ReviewP = styled.p`
    font-size: 1rem;
    text-align: center;
`;