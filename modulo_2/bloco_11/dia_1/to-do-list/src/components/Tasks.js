import React, { Component, Fragment } from 'react';

// Referência: https://blog.matheuscastiglioni.com.br/listando-tarefas-com-react/
export default class Tasks extends Component {
  render() {
    const task = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
    return (
      <Fragment>
        <h2>Lista de Tarefas</h2>
          <ol>
            { task.map(value => <li>{ value }</li>) }
          </ol>
      </Fragment>
    );
  }
}
