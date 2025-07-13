function RestartButton({ resetBoard }) {
  return (
    <div className="text-center mt-4">
      <button className="btn btn-outline-dark px-4 py-2 rounded-pill" onClick={resetBoard}>
        🔄 Restart Game
      </button>
    </div>
  );
}

export default RestartButton;