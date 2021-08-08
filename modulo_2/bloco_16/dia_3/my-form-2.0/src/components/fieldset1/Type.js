import React from "react";

// https://stackoverflow.com/questions/27784212/how-to-use-radio-buttons-in-reactjs
class Type extends React.Component {
  render() {
    return (
      <div>
        Tipo
        <div>
          <input
            type="radio"
            checked={this.props.value === "house"}
            onChange={this.props.onClick}
            value="house"
          />{" "}
          Casa
          <input
            type="radio"
            checked={this.props.value === "apartment"}
            onChange={this.props.onClick}
            value="apartment"
          />{" "}
          Apartamento
        </div>
      </div>
    );
  }
}

export default Type;
