import React from "react";

class Abstract extends React.Component {
  render() {
    return (
      <label>
        Resumo do currículo
        <div>
          <textarea
            name="resume"
            id="resume"
            maxLength="1000"
            required
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </label>
    );
  }
}

export default Abstract;
