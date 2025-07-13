function RestartButton({ resetBoard }) {
  return (
    <div className="text-center mt-3">
      <button className="btn btn-danger" onClick={resetBoard}>Restart Game</button>
    </div>
  );
}

export default RestartButton;