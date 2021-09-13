import React from 'react';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';


const PlacesPage = () => {
    return (
        <>
        <PicForPlace slides={SliderData}/>
      </>
    )
}

export default PlacesPage;