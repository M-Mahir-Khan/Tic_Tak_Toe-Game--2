function Board({ board, handleBoxClick, winningCombo }) {
  return (
    <div className="board-wrapper">
      {board.map((value, index) => {
        const isWinningCell = winningCombo?.includes(index);
        return (
          <div
            key={index}
            className={`cell ${isWinningCell ? 'winning-cell' : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
