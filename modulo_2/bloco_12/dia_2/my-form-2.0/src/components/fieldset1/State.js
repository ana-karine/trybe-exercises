import React from "react";

const states = [
  "Rio de Janeiro",
  "Minas Gerais",
  "Amapá",
  "Amazonas",
  "São Paulo",
  "Ceará",
  "Distrito Federal",
];

class State extends React.Component {
  render() {
    return (
      <label>
        <div>
          Estado
          <div>
            <select
              name="countryState"
              id="countryState"
              required
              value={this.props.value}
              onChange={this.props.onChange}
            >
              {states.map((value, key) => (
                <option key={key}>{value}</option>
              ))}
            </select>
          </div>
        </div>
      </label>
    );
  }
}

export default State;
