import React from 'react';
import Place from '../components/Place/PlaceContent';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';


const Places = () => {
    return (
        <>
        <ImageSlider slides={SliderData}/>
        <Place />
        <Footer />
      </>
    )
}

export default Places;