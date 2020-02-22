import React from 'react';
import PropTypes from 'prop-types'
import Square from './square'

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const board = [];

    for (let col = 0; col < 3; col++) {
      const rows = [];
      for (let row = 0; row < 3; row++) {
        rows.push(
          this.renderSquare((3 * col) + row)
        )
      }

      board.push(
        <div className="board-row">
          {rows}
        </div>
      );
    }
    return (
      <div>
        {board}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func
}
export default Board
