import React from 'react';
import './Header.css'

function Header ( props ) {

    return (
        <div>
            <h1>The Game That Never Ends</h1>
            <h3>Click an image below to begin. Try not to click the same image twice! <span>Current Score {props.score} | Top Score {props.topScore}</span> </h3>
        </div>  
    )

}

export default Header;