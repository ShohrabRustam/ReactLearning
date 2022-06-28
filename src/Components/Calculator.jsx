import React from 'react';
import ReactDOM from 'react-dom';
function sum(a, b) {
    return "The Sum of " + a + " and " + b + " is : " + ( a + b);
}
function sub(a, b) {
    return "The Subtraction of "+ a + " and " + b +" is : " + (a - b);
}
function mul(a, b) {
    return "The Multipilication of "+ a + " and " + b +" is : " + (a * b);
}
function div(a, b) {
    return "The Division of "+ a + " and " + b +" is : " +(a / b).toFixed(2);
}

export {sum,sub,mul,div} ;