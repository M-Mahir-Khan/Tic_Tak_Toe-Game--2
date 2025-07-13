function Board({ board, handleBoxClick }) {
  return (
    <div className="container board-container">
      {[0, 1, 2].map((row) => (
        <div className="row" key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <div
                key={index}
                className="col-4 border cell d-flex justify-content-center align-items-center fs-2"
                onClick={() => handleBoxClick(index)}
              >
                {board[index]}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;