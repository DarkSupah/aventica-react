import React from 'react';

const Header = (props) => {
    return (
        <header className="header panel">
            <h1>React app for Aventica</h1>
            <span className="saved-count">{ props.countMarkedItems() }</span>
        </header>
    )
}

export default Header;