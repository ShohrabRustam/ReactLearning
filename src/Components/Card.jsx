import React from 'react';
import { ReactDOM } from 'react-dom';

function Card(props){
    console.log(props);
return ( <>
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt='pics' className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{props.card_category}</span>
                    <h3 className='card_title'>{props.card_title}</h3>
                    <a href={props.href} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
        </div>

    </div>
</>
)
} 

export default Card;