import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render( <App />, document.getElementById('root'));

/* Example of Spread operator (...ArrayName) */

// Method 1
const fullName = ["Prince", "Kinth"];
console.log(fullName);

const bioData = [1, ...fullName, 38, "male"];
console.log(bioData);

// Method 2
const shootingGame = ["Call Of Duty", "Resident Evil", "Far Cry"];
const racingGame = ["Need For Speed", "Burnout", "Gran Turismo"];

const Game = [...shootingGame, ...racingGame];  // either use copy pase to show all elements or use Spread operator
console.log(Game);

// Method 3 - Use Array De-structing 
const shooterGame = ["Call Of Duty", "Resident Evil", "Far Cry"];
const [first, ...remaining] = shooterGame;
console.log(first);
console.log(remaining);