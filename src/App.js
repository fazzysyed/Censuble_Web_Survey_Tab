import React,{useState} from 'react';
import Survey from './survey';
import Single from './Components/Single';
import TakeSurvey from './Components/TakeSurvey';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App({link,deviceToken}) {
  const [survey,setSurvey] = useState(false);
  return (
    
 <Router>   
 <>
 
   {survey ? <Survey deviceToken ={deviceToken}   userKey = "BHSK" user_uuid="dd97ff3f-d5c7-49dd-839d-dfe12c5c6fff"  device_uuid = "JRJR-JRJ-RLC" survey_uuid = "3393ae90-835e-41ca-b196-ebf87b17365d" bearer = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlcnZpY2VzLmNlbnN1YmxlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTYyMTAxNjAyOCwiZXhwIjoxNjUyNTUyMDI4LCJuYmYiOjE2MjEwMTYwMjgsImp0aSI6IkZrZzBmUDJNNk9NTGhzZ08iLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.EfEefjykkY3_a9h0YpLKKGJi3lI2zoVFsvYo0kwQ1evzGAiYD3YZsu5JQpegNf646ebmCJxU12kCOK-0Ik_e2B_b2hYbvAfXKZnpOUGBrB3eXK34lc_SqLU0j6cqLjtb_EbQZrk33OfizTvv81CJbPX2ZpdMlMoghcXpYlC_gJfA9yMk3zff6w0me4qY0rpCKAdLlVzpXZ8aD7Ucg5vcgLAf96nO11B023FD4nj-KlaROM2Xc6plJ8WEPIiy6xvqYzlh20Y7uoTtTUqw2-tSE-Dqxq3B4jS_5bIH1qEqt4URvdI5LJaOzVptDzf0vdD2RPhjkixEYR0UNucdKG8lJ0_xH-bKQGL6ITCRMpmbZVPixoe74w0dhk9AotrNa5B_lm4BYMEwhPpMjL21QebzRToCQq4tnuc8w94DbCSIAGYVfifNAOEBc-bBMMeOqTM_etXD7do6lQHuoHhNWoDrHGN1L_KiMJFENVeewezntyLOGENUqD7uIcqgrIkC9a20CF5n3nxM13M4ZV0hxGxgJLp5LNYxMy0Jugriajn_NWUqVSmEucmU-2jNxlurlzg9YZsV2K4V0lmwVCPQMjm0-f-o7d9kL4l1HLS-E0T7gu4n6hahYIlQyy6lPqv0BQjtn40GnjDo4Gx7cLk5yLTtOwsBKEQteOWnIisHP8t4cMM"    close = {()=>setSurvey(false)}/> :  <TakeSurvey Click = {()=>{
      setSurvey(true)
    }}/>}
    </>

  </Router>
   
  )
}

export default App;
