import React from "react";

function Navbar() {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1 className="navbar-brand">
        Clicky Game
      </h1>
      <h1 className="nav navbar-dark font-weight-bold mx-auto">Click an Image to Start Game</h1>
      <p className="mr-2  font-weight-bold align-middle">Score: 0 | Top Score: 0</p>
    </nav>
  );
}

export default Navbar;
