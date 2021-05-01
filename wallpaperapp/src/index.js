import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currentTime = new Date();
currentTime = currentTime.toDateString();
let morning = "00:00:00";
let afternoon = "12:00:00";
let night = "18:00:00";

let greeting = " ";
const cssStyle = { };

if(currentTime >= morning && currentTime < afternoon) {
  greeting = "Good Morning!";
  cssStyle.color = "Green";
}else if(currentTime >= afternoon && currentTime < night) {
  greeting = "Good Afternoon!";
  cssStyle.color = "Orange";
}else {
  greeting = "Good Night!";
  cssStyle.color = "Blue";
}

ReactDOM.render(
  <>
    <div className = "backgroundImage">
      <h1>Hello Koena, <span style = {cssStyle}> {greeting} </span></h1>
    </div>
  </>,
  document.getElementById('root')
);
