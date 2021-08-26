import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/HeroSection';
import Reviews from '../Components/Reviews/Reviews';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    };

    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Reviews />
      </>
    );
};

export default Home;
 