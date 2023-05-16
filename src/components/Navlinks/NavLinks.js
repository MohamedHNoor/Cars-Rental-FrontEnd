import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../../utils/links';

const NavLinks = ({ handleLinkClick }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, id, path } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={() => {
              handleLinkClick();
            }}
            end
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
