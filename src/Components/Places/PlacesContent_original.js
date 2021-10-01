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
  Title,
  Subtitle
} from './PlacesComponent';
import { FiPlus, FiMinus } from 'react-icons/fi';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import logo from "../../images/logo.svg"
import { dbService } from '../../fbase';
import { onSnapshot, collection } from "firebase/firestore";
import "./Minimap.css";
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
ReactMapGL.workerClass = MapboxWorker;


const PlacesContent = () => {
  const [clicked, setClicked] = useState(false);
  const [shops, setShops] = useState([]);
  const [viewport, setViewport] = useState({});
  const [seletedShop, setSelectedShop] = useState(null);


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
                    <Subtitle>Review: </Subtitle>
                    <Subtitle>{shop.review}</Subtitle>
                    <Subtitle>Address: </Subtitle>
                      <Subtitle>{shop.street}, {shop.town}, {shop.city}, {shop.state}</Subtitle>
                      <Subtitle>Phone: </Subtitle>
                      <Subtitle>{shop.phone}</Subtitle>
                    <Subtitle>Category: </Subtitle>
                      <Subtitle>{shop.category}</Subtitle>
                    <Subtitle>Popular Menues: </Subtitle>
                      <Subtitle>{shop.pop}</Subtitle>
                    <Subtitle>Opening hours: </Subtitle>
                      <Subtitle>{shop.hours}</Subtitle>
                      <Subtitle>Description: </Subtitle>
                      <Subtitle>{shop.des}</Subtitle>
                      <ContenetImage>
                      </ContenetImage>
                    <ContentBottom>
                    <div className="map__section">
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/ganett33/cktbdv4jj7lec18parfyx30u8"
            onViewportChange={viewport => {
                setViewport({
                  latitude: shop.geo.latitude, 
                  longitude: shop.geo.longitude,
                  width: "400px",
                  height: "20vh",
                  zoom: 16
              });
                }}
            >
                    <Marker 
                        key={shop.id}
                        latitude={shop.geo.latitude}
                        longitude={shop.geo.longitude}
                    >
                        <button className="marker_btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedShop(shop);
                            }}    
                        >
                            <img className="img_logo" src={logo} alt="WAM" />
                        </button>
                    </Marker>

                {seletedShop ? (
                    <Popup 
                        latitude={seletedShop.geo.latitude} 
                        longitude={seletedShop.geo.longitude}
                        onClose={() => {
                            setSelectedShop(null);
                        }}
                    >
                        <div className="pop_up">
                            <h2>{seletedShop.name}</h2>
                        </div>
                    </Popup>
                ):null}    
             </ReactMapGL>
        </div>
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

export default PlacesContent;