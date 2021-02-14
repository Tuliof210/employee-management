import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// styles
import './Content.scss';
// my components
import Home from '../../views/home/Home';
import Register from '../../views/register/Register';
import Edit from '../../views/edit/Edit';
import Employees from '../../views/employees/Employees';

const Content = props => (
  <div className="content-wrapper">
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/employees">
        <Employees />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/edit">
        <Edit />
      </Route>
      <Route path="*" exact={true}>
        <Redirect to="/home" />
      </Route>
    </Switch>
  </div>
);

export default Content;
