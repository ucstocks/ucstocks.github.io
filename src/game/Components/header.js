import React from 'react';

function Header(props) {
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">{props.name}</h1>
            </div>
        </div>
        
    )
}
export default Header;