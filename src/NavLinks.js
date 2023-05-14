import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ handleLinkClick }) => {

  const links = [
    { id: 1, text: 'Models', path: '/' },
{ id: 2, text: 'Add Car', path: 'addItem' },
{ id: 3, text: 'Delete Car', path: 'deleteItem' },
    { id: 4, text: 'Reserve', path: 'reserve' },
    { id: 5, text: 'Reservations', path: 'my-reservations' },
  ];
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