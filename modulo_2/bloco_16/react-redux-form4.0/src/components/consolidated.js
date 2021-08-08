import React, { Component } from "react";
import { connect } from "react-redux";

class Consolidated extends Component {
  render() {
    return (
      <div>

      </div>

    );
  };
}




    //   <label htmlFor="InputEmail">
    //     E-mail :
    //     <input
    //       type="email"
    //       onChange={({ target }) => this.props.email(target.value)}
    //       name="email"
    //       maxLength="50"
    //       required
    //     />
    //   </label>



    //   <label htmlFor="InputCPF">
    //     CPF :
    //     <input
    //       type="text"
    //       onChange={({ target }) => this.props.CPF(target.value)}
    //       name="CPF"
    //       maxLength="11"
    //       required
    //     />
    //   </label>


    //   <label htmlFor="InputAdress">
    //     Endereço :
    //     <textarea
    //       name="adress"
    //       onChange={({ target }) => this.props.adress(target.value)}
    //       maxLength="200"
    //       required
    //     />
    //   </label>


    //   <label htmlFor="InputCity">
    //     Cidade :
    //     <input
    //       type="text"
    //       onChange={({ target }) => this.props.city(target.value)}
    //       name="city"
    //       maxLength="28"
    //       required
    //     />
    //   </label>
    // );

    //   <div>
    //     <input
    //       type="radio"
    //       name="house"
    //       onClick={({ target }) => this.props.house(target.checked)}
    //     />
    //     Casa
    //   </div>
 
    //   <div>
    //     <input
    //       type="radio"
    //       name="house"
    //       onClick={({ target }) => this.props.apartment(target.checked)}
    //     />
    //     Apartamento
    //   </div>
  
    //   <fieldset className="Fieldset">
    //     {this.inputName()}
    //     {this.inputEmail()}
    //     {this.inputCPF()}
    //     {this.inputAdress()}
    //     {this.inputCity()}
    //     {this.radioHouse()}
    //     {this.radioApto()}
    //   </fieldset>


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

// const mapDispatchToProps = (dispatch) => ({
//   name: (name) => dispatch({ type: "CHANGE_NAME", name }),
//   email: (email) => dispatch({ type: "CHANGE_EMAIL", email }),
//   CPF: (CPF) => dispatch({ type: "CHANGE_CPF", CPF }),
//   city: (city) => dispatch({ type: "CHANGE_CITY", city,  }),
//   adress: (adress) => dispatch({ type: "CHANGE_ADRESS", adress }),
//   house: (house) => dispatch({ type: "CHECK_HOUSE", house }),
//   apartment: (apartment) => dispatch({ type: "CHECK_APARTMENT", apartment }),
// });

export default connect(mapStateToProps, null)(Consolidated);
