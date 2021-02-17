import React, { Component } from "react";
import { connect } from "react-redux";
// import {radioToggle} from '../actions/index';

// class Fieldset1 extends Component {
// handleChange({ target }) {
//   const { name } = target;
//   const value = target.type === 'checkbox' ? target.checked : target.value;
//   this.setState((beforeState) => ({
//     ...beforeState,
//     [name]: value,
//   }));
// }
//   rcc
// Class Fieldset1 () {
//   return (
//     <fieldset className="Fieldset">
//       {inputName()}
//       {inputEmail()}
//       {inputCPF()}
//       {inputAdress()}
//       {inputCity()}
//       {radioHouse()}
//     </fieldset>
//   );
// }

class Fieldset1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      CPF: "",
      adress: "",
      house: false,
      apartment: false,
    };
  }

  inputName() {
    return (
      <label htmlFor="InputName">
        Nome :
        <input
          type="text"
          onChange={({ target }) => this.props.name(target.value)}
          name="name"
          maxLength="40"
          required
        />
      </label>
    );
  }

  inputEmail() {
    return (
      <label htmlFor="InputEmail">
        E-mail :
        <input
          type="email"
          onChange={({ target }) => this.props.email(target.value)}
          name="email"
          maxLength="50"
          required
        />
      </label>
    );
  }

  inputCPF() {
    return (
      <label htmlFor="InputCPF">
        CPF :
        <input
          type="text"
          onChange={({ target }) => this.props.CPF(target.value)}
          name="CPF"
          maxLength="11"
          required
        />
      </label>
    );
  }

  inputAdress() {
    return (
      <label htmlFor="InputAdress">
        Endereço :
        <textarea
          name="adress"
          onChange={({ target }) => this.props.adress(target.value)}
          maxLength="200"
          required
        />
      </label>
    );
  }

  inputCity() {
    return (
      <label htmlFor="InputCity">
        Cidade :
        <input
          type="text"
          onChange={({ target }) => this.props.city(target.value)}
          name="city"
          maxLength="28"
          required
        />
      </label>
    );
  }

  radioHouse() {
    return (
      <div>
        <input
          type="radio"
          name="house"
          onClick={({ target }) => this.props.house(target.checked)}
        />
        Casa
      </div>
    );
  }

  radioApto() {
    return (
      <div>
        <input
          type="radio"
          name="house"
          onClick={({ target }) => this.props.apartment(target.checked)}
        />
        Apartamento
      </div>
    );
  }

  render() {
    return (
      <fieldset className="Fieldset">
        {this.inputName()}
        {this.inputEmail()}
        {this.inputCPF()}
        {this.inputAdress()}
        {this.inputCity()}
        {this.radioHouse()}
        {this.radioApto()}
      </fieldset>
    );
  }
  ;
}

// short hand object JS => procurar no MDN
const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  CPF: state.CPF,
  adress: state.adress,
  city: state.city,
  house: state.house,
  apartment: state.apartment,
});

const mapDispatchToProps = (dispatch) => ({
  name: (name) => dispatch({ type: "CHANGE_NAME", name }),
  email: (email) => dispatch({ type: "CHANGE_EMAIL", email }),
  CPF: (CPF) => dispatch({ type: "CHANGE_CPF", CPF }),
  city: (city) => dispatch({ type: "CHANGE_CITY", city,  }),
  adress: (adress) => dispatch({ type: "CHANGE_ADRESS", adress }),
  house: (house) => dispatch({ type: "CHECK_HOUSE", house }),
  apartment: (apartment) => dispatch({ type: "CHECK_APARTMENT", apartment }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset1);
