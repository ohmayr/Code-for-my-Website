import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';



const Header = () => (
    <StickyHeader
    header={
    <div className="listItems">
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    <NavLink to="/resume" activeClassName="is-active">Resume</NavLink>
    <NavLink to="/Github" activeClassName="is-active">Github</NavLink>
    </div>
    }>
    <section className="myLinks">
    <a>LinkedIn Link</a>
    </section>
    </StickyHeader>
);

export default Header;
