import React from 'react';
import './Piece.css'

function Piece ( props ) {

    return (
        <div className="Piece" onClick={() => props.click(props.id)}>
            <p>My name is {props.name}</p>
        </div>
    )

}

export default Piece;
