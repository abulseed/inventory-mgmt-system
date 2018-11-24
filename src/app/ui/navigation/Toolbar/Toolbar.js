import React from 'react';

import tbStyles from './Toolbar.module.scss';

const navClassNames = `${tbStyles.Toolbar} nav nav-tabs nav-pills nav-dark flex-column`;

const Toolbar = () => (
  <ul className={navClassNames}>
    <li className="nav-item">
      <a className="nav-link active" href="#">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
);

export default Toolbar;