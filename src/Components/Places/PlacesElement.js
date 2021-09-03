import styled from 'styled-components';
import '../components.css';

export const PlacesBox = styled.div`
    background: var(--clr-font2);
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 0 30px;

`;

export const PlacesTitle = styled.h2`
    font-family: var(--ff-secondary);
    color: var(--clr-accent);
`;


export const UnderLine = styled.div`
    height: 0.25rem;
    background: var(--clr-accent);
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-item: center;
`;

export const PlacesWrapper = styled.div`
    height: 0.25rem;
    background: var(--clr-accent);
    margin-left: auto;
    margin-right: auto;
`;

export const Content = styled.div`
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