import React,{useEffect, useState} from 'react';
import Survey from './survey';
import Single from './Components/Single';
import TakeSurvey from './Components/TakeSurvey';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App({link,censuble_survey}) {
  const [survey,setSurvey] = useState(false);
  const [take,setTake] = useState(true);
  const [feedback,setFeedback] = useState(false)

  useEffect(()=>{
  
      if(censuble_survey.embed_type === "tab"){
        setSurvey(false)
    
      }else {
        setSurvey(true)
      }
  },[])

const handler = ()=>{

  setFeedback(true)
  setSurvey(false)
}

  return (
    


 <Router>   
 <>
 
   {survey ? <Survey censuble_survey ={censuble_survey}  feedbackSubmitted = {feedback}  submitHandler = {handler}   close = {()=>setSurvey(false)}/> : censuble_survey.embed_type === "tab" ? <TakeSurvey  visible = {feedback} Click = {()=>{
      setSurvey(true)
    }}/> : null }
    </>
    
  </Router>
   
  )
}

export default App;
