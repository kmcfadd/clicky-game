import React from 'react';
import './Header.css'

function Header ( props ) {

    return (
        <div>
            <h1>The Game That Never Ends</h1>
            <h3>click an image to begin <span>score {props.score} | topScore {props.topScore}</span> </h3>
            
        </div>  
    )

}

export default Header;