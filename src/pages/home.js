import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.js'
import Navbar from '../Components/Navbar/Navbar.js';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </>
    );
};

export default Home;
 