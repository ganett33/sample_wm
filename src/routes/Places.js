import React from 'react';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';
import MapComponent from  '../components/Map/MapComponent';
import PlacesContent from '../components/Places/PlacesContent';


const Places = () => {
    return (
        <>
        <PicForPlace slides={SliderData}/>
        <PlacesContent />
        <MapComponent />
      </>
    )
}

export default Places;