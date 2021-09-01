import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Place from '../components/Place/PlaceContent';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/ImageSlider/SliderData';
import ImageSlider from '../components/ImageSlider/ImageSlider';


const Places = () => {
    const [isOpen, setIsOpen] = useState(false)
      
    const toggle = () => {
      setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle}/>
        <ImageSlider slides={SliderData}/>
        <Place />
        <Footer />
      </>
    )
}

export default Places;