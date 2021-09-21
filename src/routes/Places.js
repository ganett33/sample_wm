import React from 'react';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';
import MapComponent from  '../components/Map/MapComponent';
import Accordion from '../components/Detail/DetailContent';
import PlacesContent from '../components/Places/PlaceContent';


const Places = () => {
    return (
        <>
        <PicForPlace slides={SliderData}/>
        <MapComponent />
        <PlacesContent />
      </>
    )
}

export default Places;