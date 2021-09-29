import React from 'react';
import { Button } from '@material-ui/core';
import { FaAngleDown } from "react-icons/fa";



function TakeSurvey({Click,visible}) {
    return (
       <>
       {!visible ? 
       
       <div className="take-survey" onClick = {Click}>
       <Button className="survey-btn" variant="contained" color="primary">
           Take Our Survey
       <FaAngleDown className="down-arrow"/>
       </Button>
   </div> 
   : null
    
    }
       </>
    )
}

export default TakeSurvey

