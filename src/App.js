import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
const App = () => {
  return ( 
    <Router>
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