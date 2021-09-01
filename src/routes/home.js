import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import SideBar from '../components/Sidebar/Sidebar'; 
import HeroSection from '../components/HeroSection/HeroSection';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';

const Home = () => {
    return (
      <>
      <NavBar />
      <SideBar />
        <HeroSection />
        <Reviews />
        <ImageSlider slides={SliderData}/>
        <Footer />
      </>
    );
};

export default Home;
 