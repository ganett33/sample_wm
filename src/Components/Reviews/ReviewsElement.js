import styled from 'styled-components';
import '../components.css'

export const ReviewsBox = styled.div`
    font-family:var(--ff-secondary);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 30px 0;

    @media screen and (max-width: 1000px) {
        height: 1200px;
    }
    
    @media screen and (max-width: 820px) {
        height: 1300px;
    }
`;

export const ReviewsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 5px;
    @media screen and (max-width: 1200px) {
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
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ReviewsIcon = styled.img`
float: left;
width:  300px;
height: 300px;
object-fit: cover;
    border-style: solid;
  border-width: 3px;
`;


export const ReviewH1 = styled.h1`
    font-family:var(--ff-titles);
    font-size: 2.7rem;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;

    }
`;

export const ReviewH2 = styled.h2`
color: var(--clr-font1);
    font-size: 1.1rem;
    margin-bottom: 7px;

`;

export const ReviewP = styled.p`
    color: var(--clr-font1);
    font-size: 1rem;
    text-align: center;
`;