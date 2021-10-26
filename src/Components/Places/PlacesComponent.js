import styled from 'styled-components';
import '../components.css';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 82vh;
  background: #ffffff;

  @media screen and (max-width: 1000px) {
    min-height: 100vh;
  };

  @media screen and (max-width: 500px) {
    min-height: 100vh;
  };
`;

export const Container = styled.div`
  position: absolute;
  margin: 20px;
  width: -webkit-fill-available;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

export const Wrap = styled.div`
  background: var(--clr-dark);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 2px solid #f73859;

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
  align-items: center;
  text-align: center;


  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  
`;

export const TopContent1 = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    justify-self: flex-start;
    padding: 10px; 

`;

export const Dropdown = styled.div`
  background: var(--clr-dark);
  color: #ffffff;
  width: 100%;
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
`;


export const DropdownContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  margin: 5px;
  flex-wrap: wrap;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


export const ContentBottom = styled.div`
  display: flex;
  
`;

export const Title = styled.h3`
  font-family: var(--ff-secondary);
  font-size: 1.7rem;
  color: white;
  margin: -3px 0;
  
  @media screen and (max-width: 768px) {
       font-size: 1.3rem;
    }
    @media screen and (max-width: 500px) {
       font-size: 1rem;
    }
`;

export const Subtitle = styled.p`
  font-family: var(--ff-secondary);
  font-size: 15px;

  @media screen and (max-width: 768px) {
       font-size: 13px;
    }
    @media screen and (max-width: 500px) {
       font-size: 11px;
    }
`;
