import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="nav">
        <div className="logo">PeakPlots</div>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
        </div>
        <div className="log-btn">Login</div>
     </div> 
    </>
  )
}

export default Navbar
