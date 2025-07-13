function TurnInfo({ isXTurn, winner }) {
  if (winner) return null;
  return (
    <p className="text-center">Current Turn: <strong>{isXTurn ? 'X' : 'O'}</strong></p>
  );
}

export default TurnInfo;

