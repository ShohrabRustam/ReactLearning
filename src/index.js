import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// var React = new require('react');
// var ReactDOM = new require('react-dom');
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root')); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <h1>Hello World !!!</h1>
);
var heading = document.createElement('p'); 
heading.innerHTML = 'This is the Child of the Root1 using pure JavaScript';
console.log(heading);
document.getElementById("root1").appendChild(heading);


// JSX -> JavaScript Extension  or JavaScript XML  