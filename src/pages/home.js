import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Reviews from '../Components/Reviews/Reviews';
import Footer from '../Components/Footer/Footer';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import { SliderData } from '../Components/ImageSlider/SliderData';

const Home = () => {
    
    return (
      <>
        <HeroSection />
        <Reviews />
        <ImageSlider slides={SliderData} />
        <Footer />
      </>
    );
};

export default Home;
 