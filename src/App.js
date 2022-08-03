import React, { useState } from "react";
import axios from "axios";

import { FullTimeButton } from './components/FullTimeButton';
import { FullTimeMatchInfo } from './components/FullTimeMatchInfo';
import { HalfTimeButton } from './components/HalfTimeButton';
import { HalfTimeMatchInfo } from './components/HalfTimeMatchInfo';
import { PlayerButton } from './components/PlayerButton';
import { PlayerInfo } from './components/PlayerInfo';


function App() {

  //const url = `https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview`

  function addFullTime() {

  }
  function addHalfTime() {

  }
  function addPlayer() {

  }


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="competition">
            <p>UEFA Women's Championship</p>
          </div>
          <div className="match-info">
            <h1><img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/x0vuldayagbmwazqjgbozu0v.png" alt="germany flag" width="75" height="75"></img>Germany</h1>
            <p1>VS</p1>
            <h1><img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/185xqd7s06sm2t85sxzfkrl.png" alt="france flag" width="75" height="75"></img>France</h1>
            <div className="score"><p>FT Score: </p></div>

          </div>
          <div className="NavBar">
            <ul>
              <li><a class="active" href="#general">General</a></li>
              <li><a href="#ger">GER</a></li>
              <li><a href="#fra">FRA</a></li>
              <li><a href="#player">Player</a></li>
            </ul>
          </div>
          <h2>General</h2>
          <div className="match-info">
            <div className="componentButtons">
              <FullTimeButton onClick={addFullTime} text="Full Time" />

              <HalfTimeButton onClick={addHalfTime} text="Half Time" />

              <PlayerButton onClick={addPlayer} text="Player" />

              <FullTimeMatchInfo />

              <HalfTimeMatchInfo />

              <PlayerInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
