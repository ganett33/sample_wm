import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar'; 
import HeroSection from '../components/HeroSection/HeroSection';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
      
  const toggle = () => {
    setIsOpen(!isOpen)
  };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle}/>
        <HeroSection />
        <Reviews />
        <ImageSlider slides={SliderData}/>
        <Footer />
      </>
    );
};

export default Home;
 