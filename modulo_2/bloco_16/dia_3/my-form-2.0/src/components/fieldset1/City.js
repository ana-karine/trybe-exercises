import React from "react";

class City extends React.Component {
  render() {
    return (
      <label>
        <div>
          Cidade
          <div>
            <input
              type="text"
              name="city"
              id="city"
              maxLength="28"
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

export default City;
