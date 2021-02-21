import React from "react";

class Name extends React.Component {
  render() {
    return (
      <label>
        <div>
          Nome
          <div>
            <input
              type="text"
              name="name"
              id="name"
              maxLength="40"
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

export default Name;
