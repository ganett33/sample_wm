import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='signin' component={SignIn} exact />
            </Switch>
        </Router>
    );
}

export default App;