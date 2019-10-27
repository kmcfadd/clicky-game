import React from 'react';
import './Header.css'

function Header ( props ) {

    return (
        <div>
            <h1>Heroes of the Click</h1>
            <h3>Try not to click the same hero twice! <span>Current Score {props.score} | Top Score {props.topScore}</span> </h3>
        </div>  
    )

}

export default Header;