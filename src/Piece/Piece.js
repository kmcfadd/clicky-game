import React from 'react';
import './Piece.css'

function Piece ( props ) {

    return (
        <div className="Piece">
            <p>My name is {props.name}</p>
        </div>
    )

}

export default Piece;
