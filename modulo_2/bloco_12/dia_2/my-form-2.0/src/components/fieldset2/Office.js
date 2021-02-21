import React from "react";

class Office extends React.Component {
  render() {
    return (
      <label>
        Cargo
        <div>
          <input
            type="text"
            name="role"
            id="role"
            maxLength="40"
            required
            value={this.props.value}
            onChange={this.props.onChange}
            onMouseEnter={() => {
              alert("Preencha com cuidado esta informação.");
            }}
          />
        </div>
      </label>
    );
  }
}

export default Office;
