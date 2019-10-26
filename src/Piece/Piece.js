import React from 'react';
import './Piece.css'

function Piece ( props ) {

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

export default Piece;
