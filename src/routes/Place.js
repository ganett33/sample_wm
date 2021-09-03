import React from 'react';
import Place from '../components/Place/PlaceContent';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';


const Places = () => {
    return (
        <>
        <ImageSlider slides={SliderData}/>
        <Place />
      </>
    )
}

export default Places;