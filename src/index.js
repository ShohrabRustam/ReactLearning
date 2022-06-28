import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import * as cal from './Components/Calculator';
import Card from './Components/Card';

// var React = new require('react');
// var ReactDOM = new require('react-dom');
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root')); 

/* <>
<div className='cards'>
    <div className='card'>
        <img src="https://wallpaperaccess.com/full/1510470.jpg" alt='pics' className='card_img' />
            <div className='card_info'>
                <span className='card_category'> A Netflix Original Series</span>
                <h3 className='card_title'>DARK</h3>
                <a href='https://www.netflix.com/in/title/80100172' target='_blank'>
                    <button>Watch Now</button>
                </a>
            </div>
    </div>

</div>
</> */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{display: 'flex', }} >
   <Card imgsrc= "https://wallpaperaccess.com/full/1510470.jpg" 
   card_category= "A Netflix Original Series" 
   card_title= "DARK"
   href="https://www.netflix.com/in/title/80100172"
   />
   <Card imgsrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pGDx_jOa5-K9Jlc1WaVIg53AFspQ9rx6Sg&usqp=CAU" 
   card_category= "A Netflix Original Series" 
   card_title= "Stranger Things"
   href="https://www.netflix.com/in/title/80057281" />

<Card imgsrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-8UGYwmCK3hg0wwFzdwXBkqEwdkJSwFq-Q&usqp=CAU" 
   card_category= "A Netflix Original Series" 
   card_title= "Peaky Blinders "
   href="https://www.netflix.com/in/title/80002479" />
{/* 
   <Card imgsrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRC1PZp2noE85jIlg4X0msgtvC0-zQqNLpgQ&usqp=CAU" 
   card_category= "A Netflix Original Series" 
   card_title= "Lucifer"
   href="https://www.netflix.com/in/title/80057918" /> */}
   </div>

);


// JSX -> JavaScript Extension  or JavaScript XML  