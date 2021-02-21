import React from "react";

class Description extends React.Component {
  render() {
    return (
      <label>
        Descrição do cargo
        <div>
        <textarea
          name="roleDescription"
          id="roleDescription"
          maxLength="500"
          required
          value={ this.props.value }
          onChange={ this.props.onChange }
        />
        </div>
      </label>
    );
  }
}

export default Description;
