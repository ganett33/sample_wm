import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';

const Home = () => {
    return (
      <>
        <HeroSection />
        <Reviews />
        <ImageSlider slides={SliderData}/>
        <Footer />
      </>
    );
};

export default Home;
 