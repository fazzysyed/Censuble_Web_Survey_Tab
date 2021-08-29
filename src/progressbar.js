import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function progressbar({value}) {
    return (
        
        <ProgressBar className="progress-tab" now={value *100} />
    
            
    )
}

export default progressbar;
