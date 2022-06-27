import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// var React = new require('react');
// var ReactDOM = new require('react-dom');
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root')); 
const root = ReactDOM.createRoot(document.getElementById('root'));
const name= "Shohrab Rustam"
const companyName= "Mpoket"
const date= new Date().toDateString();
const time= new Date().toLocaleTimeString();

root.render(
    <div>
        <p>{`My name is ${name} .`}</p>
        <p>{`My Company name is ${companyName} .`}</p>
        <p>{`Today Date is ${date}`}</p>
        <p>{`Curret Time is ${time}`}</p>
        
    </div>
);


// JSX -> JavaScript Extension  or JavaScript XML  