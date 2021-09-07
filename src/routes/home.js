import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Reviews from '../components/Reviews/Reviews';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import MapComponent from '../components/Map/MapComponent';

const Home = () => {

    return (
      <>
        <HeroSection />
        <Reviews />
        <MapComponent />
        <ImageSlider slides={SliderData}/>
      </>
    );
};

export default Home;
 