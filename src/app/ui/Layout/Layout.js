import React, { Fragment } from 'react';

import NavBar from '../navigation/Header/NavBar';
import Toolbar from '../navigation/Toolbar/Toolbar';

const Layout = ({ children }) => (
  <Fragment>
    <NavBar />
    <main className="d-flex flex-row">
      <Toolbar />
      <section>
        {children}
      </section>
    </main>
  </Fragment>
);

export default Layout;