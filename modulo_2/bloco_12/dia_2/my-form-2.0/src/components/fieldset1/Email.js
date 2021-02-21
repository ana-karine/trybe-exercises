import React from "react";

class Email extends React.Component {
  validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i);

    if (!isValid || email.length === "") {
      return "Invalid email";
    }
    return "";
  };

  render() {
    return (
      <label>
        <div>
          Email
          <div>
            <input
              type="text"
              name="email"
              id="email"
              maxLength="50"
              placeholder="email@email.com.br"
              required
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </div>
          {this.validateEmail(this.props.value)}
        </div>
      </label>
    );
  }
}

export default Email;
