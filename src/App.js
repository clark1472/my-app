import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
// import logo from './logo.svg';
import './App.css';
// import HelloBootstrap from './components/HelloBootstrap';

function App() {
  return (
  <div className="container">
  <Navbar />
  {/* <HelloBootstrap/> */}
  <Jumbotron />
  <Card />
</div>
);
}

export default App;
