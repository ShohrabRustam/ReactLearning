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
const data = [{
    imgsrc: "https://wallpaperaccess.com/full/1510470.jpg",
    card_category: 'A Netflix Original Series',
    card_title: 'DARK',
    link: 'https://www.netflix.com/in/title/80100172'
},
{
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pGDx_jOa5-K9Jlc1WaVIg53AFspQ9rx6Sg&usqp=CAU",
    card_category: 'A Netflix Original Series',
    card_title: 'Stranger Things',
    link: 'https://www.netflix.com/in/title/80057281'
},
{
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-8UGYwmCK3hg0wwFzdwXBkqEwdkJSwFq-Q&usqp=CAU",
    card_category: 'A Netflix Original Series',
    card_title: 'Peaky Blinders',
    link: 'https://www.netflix.com/in/title/80002479'
},
]

// for (let i = 0; i < data.length; i++) {
//     console.log(data);
// }

root.render(
    <>
        <h1 className="Heading_title">List of Top 5 Netflix Series</h1>


        <div style={{ display: 'flex', }} >
            <Card imgsrc={data[0].imgsrc}
                card_category={data[0].card_category}
                card_title={data[0].card_title}
                href={data[0].link}
            />
            <Card imgsrc={data[1].imgsrc}
                card_category={data[1].card_category}
                card_title={data[1].card_title}
                href={data[1].link}
            />
            <Card imgsrc={data[2].imgsrc}
            card_category={data[2].card_category}
            card_title={data[2].card_title}
            href={data[2].link}
        />
        {/* 
            <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pGDx_jOa5-K9Jlc1WaVIg53AFspQ9rx6Sg&usqp=CAU"
                card_category="A Netflix Original Series"
                card_title="Stranger Things"
                href="https://www.netflix.com/in/title/80057281" />

            <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-8UGYwmCK3hg0wwFzdwXBkqEwdkJSwFq-Q&usqp=CAU"
                card_category="A Netflix Original Series"
                card_title="Peaky Blinders "
                href="https://www.netflix.com/in/title/80002479" /> */}
        </div>
    </>

);


// JSX -> JavaScript Extension  or JavaScript XML  