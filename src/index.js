import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// var React = new require('react');
// var ReactDOM = new require('react-dom');
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root')); 
const root = ReactDOM.createRoot(document.getElementById('root'));
const name= "Shohrab Rustam"
const companyName= "Mpoket"
root.render(
    <div>
        <p>My name is <strong>{name}</strong> .</p>
        <p>My Company name is <strong>{companyName}</strong> .</p>
    </div>
);


// JSX -> JavaScript Extension  or JavaScript XML  