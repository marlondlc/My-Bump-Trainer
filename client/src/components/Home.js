import React from 'react';
import {Link} from 'react-router-dom'



const Homepage = () => {

    return (

        <div>
          <p>Home page</p>
          <div>
            <button><Link to="/waterform">Add(water)</Link></button>
            <button><Link to="/exerciseform">Add(exercise)</Link></button>
            <button><Link to="/foodform">Add(food)</Link></button>
          </div>
        </div>
    );
}

export default Homepage