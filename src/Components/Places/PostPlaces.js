import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
  TopContent,
  TopContent1,
  DropdownContent,
  ContentBottom,
  Title,
  Subtitle
} from './PlacesComponent';
import { FiPlus, FiMinus } from 'react-icons/fi';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import logo from "../../images/logo.svg"
import "./Minimap.css";
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
ReactMapGL.workerClass = MapboxWorker;

const PostPlaces = ({ shops }) => {
    const [clicked, setClicked] = useState(true);
    const [viewport, setViewport] = useState({
      height: "100%",
      width: "100%"
    });
    const [seletedShop, setSelectedShop] = useState(null);
    
    const toggle = index => {
        if (clicked === index) {
          return setClicked(null);
        }
        setClicked(index);
      };

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {shops.map((shop, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={shop.id}>
                  <TopContent>
                      <TopContent1>
                        <Title>{shop.name}</Title>
                      </TopContent1>
                  </TopContent>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown >
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
                    </DropdownContent>
                    <ContentBottom>
                      <div className="map__section" >
                      <a href={shop.link} target='blank'>
                        <ReactMapGL {...viewport}
                      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                      mapStyle="mapbox://styles/ganett33/cktbdv4jj7lec18parfyx30u8"
                      height="200px"
                      width="350px"
                      
                      onViewportChange={viewport => {
                          setViewport({
                            latitude: shop.geo.latitude, 
                            longitude: shop.geo.longitude,
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
                            <h3>{seletedShop.name}</h3>
                        </div>
                    </Popup>
                      ):null}    
                    </ReactMapGL>
                    </a>
                      </div>
                    </ContentBottom>
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

export default PostPlaces;