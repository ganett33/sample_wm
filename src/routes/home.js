import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Reviews from '../Components/Reviews/Reviews';
import PlacesContent from '../Components/Places/PlacesContent';
import { SliderData } from '../Components/ImageSlider/SliderData';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import MapComponent from '../Components/Map/MapComponent';

const Home = () => {

    return (
      <>
        <HeroSection />
        <Reviews />
        <PlacesContent />
        <MapComponent />
        <ImageSlider slides={SliderData}/>
      </>
    );
};

export default Home;
  