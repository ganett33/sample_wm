import React, { useState } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import Home from '../routes/home';
import SignIn from '../routes/signin';
import AppRouter from "../components/Router";
import { authService } from "fbase";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        </>
        // <Router>
        //     <ScrollToTop />
        //     <Switch>
        //         <Route path='/' exact component={Home} />
        //         <Route path='/sign-in' component={SignIn} />
        //     </Switch>
        // </Router>
    );
}

export default App;


