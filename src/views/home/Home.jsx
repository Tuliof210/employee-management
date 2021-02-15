import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './Home.scss';
import logo from './../../assets/images/logo.png';

const Home = props => (
  <div className="home-wrapper">
    <img id="logo" src={logo}></img>
    <button className="default-btn enter-btn">
      <Link to={props['linkTo'] || '/'}>Entrar</Link>
    </button>
  </div>
);

export default Home;
