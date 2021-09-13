import React from 'react';
import PlacesContent from '../components/Places/PlaceContent';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';
import MapComponent from  '../components/Map/MapComponent';

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