import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './App.scss';
// my components
import Content from '../components/layout/Content';

const App = props => (
  <div className="app-wrapper">
    <Router>
      <Content />
    </Router>
  </div>
);

export default App;
