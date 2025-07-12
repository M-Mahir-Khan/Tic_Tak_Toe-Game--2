import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: "300px" }}>
        <div className="row">
          <div className="col-4 border p-4 text-center fs-2">X</div>
          <div className="col-4 border p-4 text-center fs-2">O</div>
          <div className="col-4 border p-4 text-center fs-2">X</div>
        </div>
        <div className="row">
          <div className="col-4 border p-4 text-center fs-2">O</div>
          <div className="col-4 border p-4 text-center fs-2">X</div>
          <div className="col-4 border p-4 text-center fs-2">O</div>
        </div>
        <div className="row">
          <div className="col-4 border p-4 text-center fs-2">X</div>
          <div className="col-4 border p-4 text-center fs-2">O</div>
          <div className="col-4 border p-4 text-center fs-2">X</div>
        </div>
      </div>

    </>
  )
}

export default App
