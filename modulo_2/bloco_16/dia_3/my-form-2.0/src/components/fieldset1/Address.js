import React from "react";

class Address extends React.Component {
  render() {
    return (
      <label>
        <div>
          Endereço
          <div>
            <input
              type="text"
              name="address"
              id="address"
              maxLength="200"
              placeholder="Não digite caracteres especiais"
              required
              value={this.props.value.replace(/[^\w\s]/gi, "")}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </label>
    );
  }
}

export default Address;
