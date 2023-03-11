import React from "react";
import './style.css'

export default function Dashboard() {
  return (
    <div className='mainBody flex flex-auto flex-col'>
        <h1 className="title flex justify-center">Welcome!</h1>
        <div className="flex justify-center flexME2 flex-auto flex-col">
          <h3 className="flex justify-center flex-auto">If this is your first time here let me show you around!</h3>
          <p className='bold flex justify-center flex-auto'>Always on a mission to travel!</p>
        </div>
    </div>
  )
}
