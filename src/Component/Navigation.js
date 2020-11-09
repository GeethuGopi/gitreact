import React from 'react';
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <div>
        <ul>
            <Link to="/">
            <li> Home</li> 
            </Link>
            <Link to="/About"> 
            <li >About</li>
            </Link>
            <Link to ="/Contact">
            <li >Contact</li>
            </Link>
            </ul>
        </div>
      );
}
 
export default Navigation;