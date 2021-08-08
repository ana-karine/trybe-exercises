import React, { Component } from "react";

import { connect } from 'react-redux';
import {
  changeName,
} from '../actions/formActions';

// Dados pessoais
import Name from "./fieldset1/Name";
import Email from "./fieldset1/Email";
import CPF from "./fieldset1/CPF";
import Address from "./fieldset1/Address";
import City from "./fieldset1/City";
import State from "./fieldset1/State";
import Type from "./fieldset1/Type";

// Dados profissionais
import Abstract from "./fieldset2/Abstract";
import Office from "./fieldset2/Office";
import Description from "./fieldset2/Description";

// Consolidado dos dados
import Consolidated from "./Consolidated";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      countryState: "",
      addressType: "",
      resume: "",
      role: "",
      roleDescription: "",
      display: false,
    };
  }

  setAddressType = (event) => {
    this.setState({
      addressType: event.target.value,
    });
  };

  validateCity(city) {
    if (/^[0-9].*/.test(city.target.value)) {
      this.setState({ [city.target.name]: "" });
    }
  }

  handleChange = (event) => {
    console.log(this.state);

    if (event.target.name === "city")
      event.target.value = event.target.value.match(/^\d/)
        ? ""
        : event.target.value;

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { addName } = this.props;
    addName(name);
    console.log(this.state)
  };

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      resume,
      role,
      roleDescription,
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset className="fieldset">
          <legend>Dados pessoais</legend>
          <Name value={name} onChange={this.handleChange} />
          <Email value={email} onChange={this.handleChange} />
          <CPF value={cpf} onChange={this.handleChange} />
          <Address value={address} onChange={this.handleChange} />
          <City value={city} onChange={this.handleChange} />
          <State value={countryState} onChange={this.handleChange} />
          <Type value={addressType} onClick={this.setAddressType} />
          <br></br>
        </fieldset>
        <div className="space-fieldset"></div>
        <fieldset className="fieldset">
          <legend>Dados profissionais</legend>
          <Abstract value={resume} onChange={this.handleChange} />
          <Office value={role} onChange={this.handleChange} />
          <br></br>
          <Description value={roleDescription} onChange={this.handleChange} />
        </fieldset>
        <div className="space-btn"></div>
        <div className="buttons">
          <button type="button" onClick={this.showConsolidated}>
            Enviar
          </button>
          <button type="button" onClick={this.clearForm}>
            Limpar
          </button>
        </div>
        <Consolidated
          display={this.state.display}
          handleClose={this.hideConsolidated}
        >
          <div>
            <legend>Consolidado dos dados</legend>
            <p>Nome: {this.state.name}</p>
            <p>E-mail: {this.state.email}</p>
            <p>CPF: {this.state.cpf}</p>
            <p>Endereço: {this.state.address}</p>
            <p>Cidade: {this.state.city}</p>
            <p>Estado: {this.state.countryState}</p>
            <p>Tipo de endereço: {this.state.addressType}</p>
            <p>Resumo do Currículo: {this.state.resume}</p>
            <p>Cargo: {this.state.role}</p>
            <p>Descrição do Cargo: {this.state.roleDescription}</p>
          </div>
        </Consolidated>
      </form>
    );
  }

  showConsolidated = () => {
    this.setState({ display: true });
  };

  clearForm = () => {
    Object.keys(this.state).forEach((key) => {
      this.setState((beforeState, _props) => ({ ...beforeState, [key]: "" }));
    });
  };

  hideConsolidated = () => {
    this.setState({ display: false });
  };
}

const mapStateToProps = (state) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch) => ({
  addName: (name) => dispatch(changeName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// export default Home;
