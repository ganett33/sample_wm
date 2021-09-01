import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Places from "../routes/Places";
import Place from "../routes/Place";
import Signin from "../routes/Signin";
import { ImageSlider } from './ImageSlider/ImageElement';
import { animateScroll as scroll} from 'react-scroll';
import Footer from './Footer/Footer';


const AppRouter = ({ isLoggedIn }) => {
  const toggleSubscribe = () => {
    scroll.scrollToBottom();
  }

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/new-place' exact component={ImageSlider} />
            <Route path='subscribe' onclick={toggleSubscribe} component={Footer} />
            <Route path='/places' exact component={Places} />
            <Route path='/place' exact component={Place} />
          </>
        ) : (
          <Route exact path="/">
            <Signin />
          </Route>
        )}
      </Switch>
    </Router>  
  );
};
export default AppRouter;