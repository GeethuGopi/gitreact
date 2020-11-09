import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation';
const App = () => {
  return ( 
    <Router>
    <Route>
    <Navigation />
    </Route>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/About">
    <About />
    </Route>
    <Route path="/Contact">
    <Contact />
    </Route>
    </Router>
    
   );
}
 
export default App;