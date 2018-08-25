import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Personal Website</h1>
    <div className="listItems">
    <NavLink to="/" activeClassName="is-active" exact={true}><a>Home</a></NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}><a>Portfolio</a></NavLink>
    <NavLink to="/contact" activeClassName="is-active"><a>Contact</a></NavLink>
    <NavLink to="/resume" activeClassName="is-active"><a>Resume</a></NavLink>
    </div>
    </header>
);

export default Header;
