import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const myScript = window.censuble_survey;




ReactDOM.render(
  <React.StrictMode>
    <App  
  censuble_survey = {myScript}
    />
  </React.StrictMode>,
 myScript.embed_type === "tab" ?  document.body.appendChild(document.createElement("DIV")) : document.getElementById(myScript.embed_location) 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
