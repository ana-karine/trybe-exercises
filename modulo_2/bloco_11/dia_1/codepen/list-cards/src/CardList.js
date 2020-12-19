import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <div className="row">

        <div className="col-sm-4">
          <Card
            featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
            title="How To Make Interactive ReactJS Form"
            description="Let's write some interactive form with React"
            link="https://sebhastian.com/interactive-react-form"
          />
        </div>

        <div className="col-sm-4">
          <Card
            featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
            title="Babelify your JavaScript code"
            description="Babel make JavaScript code browser-compatible."
            link="https://sebhastian.com/babel-guide"
          />
        </div>

        <div className="col-sm-4">
          <Card
            featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
            title="JavaScript Basics Before You Learn React"
            description="Learn the prerequisites of learning React fast"
            link="https://sebhastian.com/js-before-react"
          />
        </div>

        <div className="col-sm-4">
          <Card
            featureImage="Tutorial React"
            title="Tutorial React"
            description="React: uma biblioteca JavaScript para criar interfaces de usuário"
            link="https://pt-br.reactjs.org/"
          />
        </div>
    
        <div className="col-sm-4">
          <Card
            featureImage="Começando com React"
            title="Começando com React"
            description="Neste artigo mostraremos como dizer Olá para o React."
            link="https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Comecando_com_React"
          />
        </div>

      </div>
    )
  }
}

export default CardList;
