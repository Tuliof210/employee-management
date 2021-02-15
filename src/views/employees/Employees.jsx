import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './Employees.scss';
// assets
import mockData from './../../assets/json/pessoas.json';
// my components
import Row from '../../components/common/Row/Row';

const Employees = props => (
  <div className="employees-wrapper">
    <div id="turn-back">
      <button onClick={showMe}>Show Me</button>
    </div>
    <div className="search-wrapper"></div>
    <div className="list-data">
      {mockData.map((data, index) => (
        <Row
          key={index}
          name={data['nome']}
          cpf={data['cpf']}
          wage={data['salario']}
          discount={data['desconto']}
          dependents={data['dependentes']}
        />
      ))}
    </div>
  </div>
);

const showMe = () => {
  console.log(mockData);
};

export default Employees;
