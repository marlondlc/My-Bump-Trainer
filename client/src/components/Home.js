import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"

const Homepage = () => {
 
    return (

        <div>
          <p>Home page content</p>
          <div className="btn-display">
            <div>
            <button><Link to="/waterform">Add(water)</Link></button>
            </div>
            <div>
            <button><Link to="/exerciseform">Add(exercise)</Link></button>
            </div>
            <div>
            <button><Link to="/foodform">Add(food)</Link></button>
            </div>
          </div>
        </div>
    );
}

export default Homepage