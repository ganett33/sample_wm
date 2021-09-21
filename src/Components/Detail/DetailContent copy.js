import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
  TopContent,
  TopContent1,
  TopContent2,
  TopConten3,
  DropdownContent,
  ContenetImage,
  ContentBottom,
  ContentReview,
  Title,
  Subtitle
} from './DetailComponent';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Shops from '../Restaurants.json';


const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Shops.map((shop, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <TopContent>
                      <TopContent1>
                        <Title>{shop.name}</Title>
                      </TopContent1>
                      <TopContent2>
                        <Subtitle>Category: </Subtitle>
                        <Subtitle>{shop.category}</Subtitle>
                      </TopContent2>
                      <TopConten3>
                        <Subtitle>Popular Menues: </Subtitle>
                        <Subtitle>{shop.pop}</Subtitle>
                      </TopConten3>
                  </TopContent>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <DropdownContent>
                    <Subtitle>Opening hours: </Subtitle>
                      <Subtitle>{shop.hours}</Subtitle>
                      <Subtitle>Description: </Subtitle>
                      <Subtitle>{shop.des}</Subtitle>
                      <ContenetImage>
                      </ContenetImage>
                    <ContentBottom>
                      <ContentReview>
                      
                      </ContentReview>
                    </ContentBottom>

                    </DropdownContent>
                  </Dropdown>
                ) : null}

              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;