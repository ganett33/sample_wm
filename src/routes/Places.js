import React from 'react';
import PlacesContent from '../components/Places/PlaceContent';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';
import MapComponent from  '../components/Map/MapComponent';
import Accordion from '../components/Detail/DetailContent';


const Places = () => {
    return (
        <>
        <PicForPlace slides={SliderData}/>
        <MapComponent />
        <Accordion />
      </>
    )
}

export default Places;