import React from 'react';

function Header(props) {
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">{props.name}</h1>
            </div>
            <h3 className="health">Health: {props.health}</h3>
            <h3 className="money">Money: ${props.money}</h3>
            <h3 className="assets">Assets: ${props.assets}</h3>
            <h3 className="date">Date: {props.date}</h3>
        </div>

        
    )
}
export default Header;