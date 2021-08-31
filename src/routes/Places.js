import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';
import Footer from '../components/Footer/Footer';


const List = () => {
    const [isOpen, setIsOpen] = useState(false)
      
    const toggle = () => {
      setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle}/>

        <ImageSlider slides={SliderData}/>
        <Footer />
      </>
    )
}

export default List;