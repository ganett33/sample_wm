import styled from 'styled-components';
import '../components.css';

export const PlaceBox = styled.div`
    background: var(--clr-font1);
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 0 30px;
`;

export const PlaceTitle = styled.h2`
    font-family: var(--ff-secondary);
`;

export const PlacesWrapper = styled.div`
    height: 0.25rem;
    background: var(--clr-accent);
    margin-left: auto;
    margin-right: auto;
`;
