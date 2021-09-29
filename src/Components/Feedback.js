import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import feedbackImage from '../Assets/Images/thanks-bg.png';
import Thanks from './thanks';


function Feedback({minimize,feedback,handler,feed,sendFeedback}) {
    
    return (
     <>
       {feed ?  <div>

<div>
    <div className="feedbackbg">
        <p className="feedback-text-tab">Thank You. Leave Feedback!</p>
    </div>

</div>
{/* <img className="feedback-image" src={feedbackImage}/> */}

<textarea className="feedback-box-tab"
multiline={true}
onFocus = {true}
value = {feedback}
onChange = {(value)=>handler(value)}
placeholder= "Your Feedback Here..."
/>

<Button className="submit-btn" variant="contained" color="primary" onClick = {sendFeedback}>
        Submit
</Button>
</div>  :  <Thanks minimize = {minimize} />}

     

        </>
    )
}

export default Feedback
