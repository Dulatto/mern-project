import React from 'react'


function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper navbar blue">
                <a href="/" className="brand-logo">MERN Todo App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Login</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
