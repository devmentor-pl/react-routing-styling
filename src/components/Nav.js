// ./src/components/Nav
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
    color: #444;
    text-decoration: none;
    &:hover {
        color: red;
    }
    &.${props => props.activeClassName} {
        border: 1px solid red;
    }
`;

const Nav = () => {
    const activeClass = 'active';
    return <ul>
        <li>
            <StyledLink 
                exact 
                activeClassName={activeClass}
                to="/"
            >Home</StyledLink>
        </li>
        <li>
            <StyledLink 
                activeClassName={activeClass} 
                to="/category"
            >Category</StyledLink>
        </li>
        <li>
            <StyledLink 
                activeClassName={activeClass} 
                to="/contact"
            >Contact</StyledLink>
        </li>
        <li>
            <StyledLink 
                activeClassName={activeClass} 
                to="/admin"
            >Admin</StyledLink>
        </li>
    </ul>
}

export default Nav;