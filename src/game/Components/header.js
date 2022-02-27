import React from 'react';

function Header(props) {
    const healthbarStyling = {
        backgroundColor: "green",
        width: String(props.health * 100) + "%",
    }
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">The Wage-Worker of Wallstreet</h1>
            </div>
            <div className="health-container">
                <h3 className="health">Health:</h3>
                <div className="health-bar">
                    <div style={healthbarStyling}>

                    </div>
                </div>
            </div>
            <div className = "money-container">
                <h3 className="money">Money:</h3>
                <h3>${props.money}</h3>
            </div>
            <div className = "assets-container">
                <h3 className="assets">Assets:</h3>
                <h3>${props.assets}</h3>
            </div>
            <div className="date-container">
                <h3 className="date">Date:</h3>
                <h3>{props.date}</h3>
            </div>
        </div>

        
    )
}
export default Header;