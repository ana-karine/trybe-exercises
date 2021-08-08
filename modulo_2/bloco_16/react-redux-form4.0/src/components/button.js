import React, { Component } from 'react';
// import store from '../store/index';
import { connect } from "react-redux";


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      name: this.props.name
      
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >Clique em mim!</button>
      </div>
    );
  }
}

//export default Button;

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps, null)(Button);
