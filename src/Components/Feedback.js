import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import feedbackImage from '../Assets/Images/thanks-bg.png';
import { Tick } from 'react-crude-animated-tick';


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
</div>  :   <div  className= {minimize ? "thankyou-tick-tab" : "thankyou-tick"}>
        <div>
            <Tick size={100} />
        </div>
        <h2>Thank You</h2>
        <p>Your feedback has been submitted.</p>
        </div> }

     

        </>
    )
}

export default Feedback
