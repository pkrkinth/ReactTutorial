import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import App, { firstName, lastName, myName, mySkills } from './App'; 

ReactDOM.render(
  <>
    <App/>
      {/* <div>
        <ol>
          <li> Full name: {myName} </li>
          <li> First name: {firstName()} </li>
          <li> Last name: {lastName()} </li>
          <li> My skills: {mySkills} </li>      
        </ol>
      </div> */}
  </>,
  document.getElementById('root')
);