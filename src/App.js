import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Sidebar from '../src/Components/Sidebar/Sidebar';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from './pages/home';
import SignIn from './pages/signin';


function App() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    };

    return (
        <Router>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sign-in' component={SignIn} />
            </Switch>
        </Router>
    );
}

export default App;


