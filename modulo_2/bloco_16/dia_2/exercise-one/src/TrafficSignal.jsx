import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
};

TrafficSignal.propTypes = {
  signalColor: PropTypes.func.isRequired,
  changeSignal: PropTypes.string.isRequired,
};

// function mapStateToProps(state) { }
// const mapStateToProps = (state) => { }
const mapStateToProps = (state) => ({
  signalColor: state.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
