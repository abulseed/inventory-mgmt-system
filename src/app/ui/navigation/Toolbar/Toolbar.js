import React from 'react';
import { NavLink } from "react-router-dom";

import tbStyles from './Toolbar.module.scss';

const navClassNames = `${tbStyles.Toolbar} nav nav-pills flex-column p-2`;

const Toolbar = () => (
  <ul className={navClassNames}>
    <li className="nav-item">
      <NavLink className="nav-link" to="/" activeClassName="active" exact>Procure Items</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/inventory" activeClassName="active">Sell Items</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/return" activeClassName="active">Return Items</NavLink>
    </li>
  </ul>
);

export default Toolbar;