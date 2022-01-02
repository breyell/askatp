import React from "react";
import {Link} from 'gatsby'

export default function Nav() {
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">#askatp</Link>

                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}