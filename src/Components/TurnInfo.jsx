function TurnInfo({ isXTurn, winner }) {
  if (winner) return null;
  return (
    <p className="text-center fw-medium fs-5">Current Turn: <strong className="text-info">{isXTurn ? 'X' : 'O'}</strong></p>
  );
}

export default TurnInfo;
