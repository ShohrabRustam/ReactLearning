import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading from './Components/Heading';
import Para from './Components/Para';
// var React = new require('react');
// var ReactDOM = new require('react-dom');
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root')); 
const root = ReactDOM.createRoot(document.getElementById('root'));
const time = new Date(/* 2020, 3,2,8 */);
var cssStyle = {
    color: 'green'
}
const h = time.getHours();
// console.log(h);
var color = '';
var greeting = ''
if (h >= 5 && h <= 11) {
    greeting = "Good Morning"
    cssStyle.color = 'green'
}
else if (h >= 12 && h <= 15) {
    greeting = "Good Afternoon"
    cssStyle.color = 'blue'

} else if (h >= 16 && h <= 18) {
    greeting = "Good Evening"
    cssStyle.color = 'red'

} else {
    greeting = "Good Night"
    cssStyle.color = 'yellow'

}

root.render(
    <div>
        <Heading></Heading>,
        <Para></Para>,
        <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
    </div>

);


// JSX -> JavaScript Extension  or JavaScript XML  