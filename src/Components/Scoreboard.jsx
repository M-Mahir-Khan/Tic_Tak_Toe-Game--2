function ScoreBoard({ xScore, oScore, winner }) {
  return (
    <div className="text-center mb-3">
      <h5 className="mb-2">Score</h5>
      <p className="mb-1">X: {xScore} | O: {oScore}</p>
      {winner && (
        <div className={`alert ${winner === 'Tie' ? 'alert-warning' : 'alert-success'}`}>
          {winner === 'Tie' ? 'Match Tie!' : `Winner: ${winner}`}
        </div>
      )}
    </div>
  );
}

export default ScoreBoard;