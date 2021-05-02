import React from 'react';
import './index.css';

const myName = 'Prince K. Raman Kinth';
const mySkills = "React JS";

function Greeting() {
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

    function firstName() {
        let fName = "Prince";
        return fName;
    }
    
    function lastName() {
        let lName = "Kinth";
        return lName;
    }

    return (
        <>
            <div>
                <h1>Hello Koena, <span style = {cssStyle}> {greeting} </span></h1>
                <ol>
                    <li> Full name: {myName} </li>
                    <li> First name: {firstName()} </li>
                    <li> Last name: {lastName()} </li>
                    <li> My skills: {mySkills} </li>      
                </ol>
            </div>
        </>
    );
}

export default Greeting;