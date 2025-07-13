function ScoreBoard({ xScore, oScore, winner }) {
  return (
    <div className="text-center mb-3">
      <h5 className="mb-2 fw-semibold">Score Board</h5>
      <p className="mb-1 fs-5">
        <span className="text-danger">X: {xScore}</span> | <span className="text-success">O: {oScore}</span>
      </p>
      {winner && (
        <div className={`alert ${winner === 'Tie' ? 'alert-warning' : 'alert-success'} mt-2`}>
          {winner === 'Tie' ? 'Match Tie!' : `🎉 Winner: ${winner}`}
        </div>
      )}
    </div>
  );
}

export default ScoreBoard;

