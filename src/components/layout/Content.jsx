import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Route path="/"></Route>
      <Route path="/employees"></Route>
      <Route path="/register"></Route>
      <Route path="/edit"></Route>
    </Switch>
  </div>
);

export default Content;
