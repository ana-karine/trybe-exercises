import React from "react";

class CPF extends React.Component {
  render() {
    return (
      <label>
        <div>
          CPF
          <div>
            <input
              type="text"
              name="cpf"
              id="cpf"
              maxLength="11"
              required
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </label>
    );
  }
}

export default CPF;
