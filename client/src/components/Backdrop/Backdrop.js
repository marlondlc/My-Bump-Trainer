import React from 'react';

import '../../css/Backdrop.css'

const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default backdrop;