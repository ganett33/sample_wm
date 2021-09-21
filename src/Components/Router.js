import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar'; 
import Home from "../routes/Home";
import Places from "../routes/Places";
import Signin from "../routes/Signin";
import About from '../routes/About';
import Footer from './Footer/Footer';


const AppRouter = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false)
      
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/about' exact component={About} />
            <Route path='/places' component={Places} />
            <Footer />
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