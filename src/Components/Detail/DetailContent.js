import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
  TopContent,
  TopContent1,
  DropdownContent,
  ContenetImage,
  ContentBottom,
  ContentReview,
  Title,
  Subtitle
} from './DetailComponent';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { dbService } from '../../fbase';
import { onSnapshot, collection } from "firebase/firestore";
import Minimap from '../MiniMap/MiniMap';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const [shops, setShops] = useState([ ]);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  useEffect(
    () =>
      onSnapshot(collection(dbService, "shops"), (snapshot) =>
      setShops(snapshot.docs.map((doc) => ({ ...doc.data() })))
      ),
    []
  );

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {shops.map((shop, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <TopContent>
                      <TopContent1>
                        <Title>{shop.name}</Title>
                      </TopContent1>
                  </TopContent>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <DropdownContent>
                    <Subtitle>Category: </Subtitle>
                      <Subtitle>{shop.category}</Subtitle>
                    <Subtitle>Popular Menues: </Subtitle>
                      <Subtitle>{shop.pop}</Subtitle>
                    <Subtitle>Opening hours: </Subtitle>
                      <Subtitle>{shop.hours}</Subtitle>
                      <Subtitle>Description: </Subtitle>
                      <Subtitle>{shop.des}</Subtitle>
                      <Subtitle>Address: </Subtitle>
                      <Subtitle>{shop.street}, {shop.town}, {shop.city}, {shop.state}</Subtitle>
                      <Subtitle>Phone: </Subtitle>
                      <Subtitle>{shop.phone}</Subtitle>
                      <ContenetImage>
                      </ContenetImage>
                    <ContentBottom>
                      <ContentReview>
                      <Minimap />
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