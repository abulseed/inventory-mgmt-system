import React from 'react';

import Logo from '../../../../assets/logo.svg';

import nbStyles from './NavBar.module.scss';

const NavBar = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <img src={Logo} alt="logo" className={nbStyles.Logo} />
    <span className="navbar-brand">
      Inventory Management System
    </span>
  </header>
);

export default NavBar;