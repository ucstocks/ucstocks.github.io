import React from 'react';

function Header(props) {
    const healthbarStyling = {
        backgroundColor: "green",
        width: String(props.health * 100) + "%",
    }
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">{props.name}</h1>
            </div>
            <div className="health-container">
                <h3 className="health">Health:</h3>
                <div className="health-bar">
                    <div style={healthbarStyling}>

                    </div>
                </div>
            </div>
            
            <h3 className="money">Money: ${props.money}</h3>
            <h3 className="assets">Assets: ${props.assets}</h3>
            <h3 className="date">Date: {props.date}</h3>
        </div>

        
    )
}
export default Header;