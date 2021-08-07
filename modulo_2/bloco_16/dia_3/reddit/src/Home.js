import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Bem-vindo ao sistema de cadastramento!</h3>
        {' '}
        <Link to="/Login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;
