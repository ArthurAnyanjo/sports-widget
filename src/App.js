import React, { useState } from "react";
import axios from "axios";


function App() {

  const url = `https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview`

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="competition"><p>UEFA Women's Championship</p></div>
          <div className="match-info">
            <h1>Germany</h1>
            <p1>VS</p1>
            <h1>France</h1>
            <p2>Full Time Score: </p2>
          </div>
          <div className="NavBar">
            <ul>
              <li><a class="active" href="#home">General</a></li>
              <li><a href="#ger">GER</a></li>
              <li><a href="#fra">FRA</a></li>
              <li><a href="#player">Player</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom"></div>
      </div>

    </div>
  );
}

export default App;
