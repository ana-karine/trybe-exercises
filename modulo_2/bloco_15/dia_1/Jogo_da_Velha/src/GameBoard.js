import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState, updateGame } = this.props;
    return (
      <div className="container-game">
        <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={() => updateGame(i)}
            content={playerId}
          />
        ))}
      </div>
    </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;
