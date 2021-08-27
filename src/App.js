import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sign-in' component={SignIn} />
            </Switch>
        </Router>
    );
}

export default App;


