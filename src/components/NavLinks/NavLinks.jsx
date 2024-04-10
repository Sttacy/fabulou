import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavLinks.css"

const links = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/search',
        name: 'Shop',
    },
    {
        path: '/about',
        name: 'About us',
    },
];

const NavLinks = () => {
    return (
        <>
            {links.map((link, index) => (
                <NavLink className="lowercase movingText"  to={link.path} key={`${link.name}-${index}`}>
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;
