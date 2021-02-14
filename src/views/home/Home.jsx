import React from 'react';
//styles
import './Home.scss';
import logo from './../../assets/images/logo.png';

const Home = props => (
  <div className="home-wrapper">
    <img id="logo" src={logo}></img>
    <button className="default-btn enter-btn">Entrar</button>
  </div>
);

export default Home;
