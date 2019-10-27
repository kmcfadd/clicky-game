import React from 'react';
import './Hero.css'

function Hero ( props ) {

    return (
        <div className="hero-container">
            <img className="hero"
            src={props.image} 
            alt={props.name}
            onClick={() => props.click(props.id)}
            />
        </div>
    )

}

export default Hero;
