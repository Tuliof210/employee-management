import React, { Component } from 'react';
//styles
import './Row.scss';

export default class Row extends Component {
  state = {
    name: this.props['name'],
    cpf: this.props['cpf'],
    wage: this.props['wage'],
    discount: this.props['discount'],
    dependents: this.props['dependents'],
    IRPF: this.props['IRPF'],
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row-card">
        <div className="data-container">
          <label>Nome</label>
          <p>{this.state['name'] || '-'}</p>
        </div>
        <div className="data-container">
          <label>CPF</label>
          <p>{this.state['cpf'] || '-'}</p>
        </div>
        <div className="data-container">
          <label>Salário</label>
          <p>{this.state['wage'] || 0}</p>
        </div>
        <div className="data-container">
          <label>Desconto</label>
          <p>{this.state['discount'] || 0}</p>
        </div>
        <div className="data-container">
          <label>Dependentes</label>
          <p>{this.state['dependents'] || 0}</p>
        </div>
        <div className="data-container">
          <label>Desconto IRPF</label>
          <p>{this.state['IRPF'] || 0}</p>
        </div>
        <div className="btn-container">
          <button>Editar</button>
          <button>Remover</button>
        </div>
      </div>
    );
  }
}
