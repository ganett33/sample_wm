import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/HeroSection';
import Reviews from '../Components/Reviews/Reviews';
import Footer from '../Components/Footer/Footer';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import { SliderData } from '../Components/ImageSlider/SliderData';

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
        <ImageSlider slides={SliderData} />
        <Footer />
      </>
    );
};

export default Home;
 