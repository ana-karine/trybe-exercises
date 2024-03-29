import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRegister } from './actions';


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
      password: '',
    };
  }

  validateRegister = () => {
    const { name, age, email, password } = this.state;
    this.props.addRegister({ name, age, email, password });

    this.setState({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, age, email, password } = this.state;
    const { userLogin } = this.props;

    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={ name }
            onChange={ e => this.setState({ name: e.target.value }) }
          />
          <input
            type="number"
            placeholder="Idade"
            value={ age }
            onChange={ e => this.setState({ age: e.target.value }) }
          />
          <input
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ e => this.setState({ email: e.target.value }) }
          />
          <input
            type="text"
            placeholder="Senha"
            value={ password }
            onChange={ e => this.setState({ password: e.target.value }) }
          />
        </div>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e),
)});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
