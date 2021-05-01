// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

// In React v16 it is possible for render() to return array of elements.

const firstName = "Prince";
const middleName = "K. Raman";
const lastName = "Kinth";
const todaysDate = new Date().toLocaleDateString(); 
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "http://pkrkinth.blogspot.com/";

// Inline styling
const heading = {
  color: '#00008b',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #008b8b',
  margin: '50px 0px'
}

ReactDOM.render(
<>
  <h1>Header1: Your favorite NetFlix series!</h1>
  <p>Paragraph: Here you have mentioned about your five NetFlix series.</p>
  <ol>
    <li>DARK</li>
    <li>Series 2</li>
    <li>My Web Series 3</li>
    <li>Netflix Series 4</li>
    <li>Series 5</li>
  </ol>
  <h2>My name is {`${firstName} ${middleName} ${lastName}`} </h2>
  <p>This is required number {3+6} </p>
  {/* We can use Expression only in this {} and not the Statement */}
  {/* Use Template Literal as `${<expression>}` */}
  <p>Todays date is: {`${todaysDate}`}</p>
  <p>Current time is: {`${currentTime}`}</p>

  {/* Use of HTML Global attribute (https://www.w3schools.com/tags/ref_standardattributes.asp) */}
  <h1 contentEditable = {true}> This is editable content. </h1>
  <img src = {img1} alt = "randomimage"/>
  <img src = {img2} alt = "randomimage"/>
  
  {/* Use of anchor tags */}
  <a href = {links} target = "_prince">
  <img src = {img3} alt = "randomimage"/>
  </a>

  {/* CSS styling & Importing CSS files */}
  <h2 className = "heading"> This is my album </h2>
  <div className = "img_div">
    <img src = {img1} alt = "randomimage"/>
    <img src = {img2} alt = "randomimage"/>
    <img src = {img3} alt = "randomimage"/>
  </div>

  {/* Use of Inline styling */}
  <h2 style = {heading}> Example of Inline styling </h2>
  <div className = "img_div">
    <img src = {img1} alt = "randomimage"/>
    <img src = {img2} alt = "randomimage"/>
    <img src = {img3} alt = "randomimage"/>
  </div>
</>,
document.getElementById('root')
);