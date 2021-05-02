import React from 'react';

// function add(a,b) {
//     let sum = a + b;
//     return sum;
// }

// function sub(a,b) {
//     let sub = a - b;
//     return sub;
// }

// function div(a,b) {
//     let div = a / b;
//     div = div.toFixed(2);
//     return div;
// }

// function mult(a,b) {
//     mult = a * b;
//     return mult;
// }

function Calc() {
    function add(a,b) {
        let sum = a + b;
        return sum;
    }
    
    function sub(a,b) {
        let sub = a - b;
        return sub;
    }
    
    function div(a,b) {
        let div = a / b;
        div = div.toFixed(2);
        return div;
    }
    
    function mult(a,b) {
        mult = a * b;
        return mult;
    }
    return (
        <>
        <ul>
            <li> Sum of two number 25 and 56 is: { add(25,56) } </li>
            <li> Subtraction of two number 25 and 6 is: { sub(25,6) } </li>
            <li> Division of two number 59 by 6 is: { div(59,6) } </li>
            <li> Multiplication of two number 25 and 56 is: { mult(25,56) } </li>
        </ul>
        </>
    );
}

export default Calc;
// export {add, sub, div, mult};