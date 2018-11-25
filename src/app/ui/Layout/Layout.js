import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import layoutStyles from './Layout.module.scss';
import NavBar from '../navigation/Header/NavBar';
import Toolbar from '../navigation/Toolbar/Toolbar';
import AddToStockView from '../../containers/AddToStockView/AddToStockView';
import Inventory from '../../containers/Inventory/Inventory';

const Layout = () => (
  <Fragment>
    <NavBar />
    <main className="d-flex flex-row">
      <Toolbar />
      <section className={layoutStyles.mainSection}>
        <Switch>
          <Route exact path="/" component={AddToStockView} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/return" component={AddToStockView} />
        </Switch>
      </section>
    </main>
  </Fragment>
);

export default Layout;