import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/home';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path='/' component={Home} exact />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;


{/* <Route path='signin' component={SignIn} exact /> */}