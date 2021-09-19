import styled from 'styled-components';
import '../components.css';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120vh;
  background: #ffffff;
`;

export const Container = styled.div`
  position: absolute;
  margin: 10px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

export const Wrap = styled.div`
  background: var(--clr-dark);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid pink;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;


export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export const TopContent1 = styled.div`
  display: flex;
`;

export const TopContent2 = styled.div`
  display: flex;
`;

export const TopConten3 = styled.div`
  display: flex;
`;



export const Dropdown = styled.div`
  background: var(--clr-dark);
  color: #ffffff;
  width: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1srem;
  }
`;


export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 1.5rem;
`;

export const Subtitle = styled.p`
  font-family: var(--ff-secondary);
  font-size: 1rem;
  padding: 1px;
`;
