import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Hamburger } from '../Hamburger';
import { Logotype } from '../Logotype';
import CreditsButton from '../CreditsButton';
import AccountSettings from '../AccountSettings';
import './Navbar.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <Logotype />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/my_creations">My Creations</NavLink>
            </li>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <CreditsButton credits={4} />
            </li>
            <li>
              <AccountSettings />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
