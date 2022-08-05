import React, { useState, useEffect } from "react";
import axios from "axios";

import { FullTimeButton } from "./components/FullTimeButton";

import { HalfTimeButton } from "./components/HalfTimeButton";

import { SecondHalfButton } from "./components/SecondHalfButton";



function App() {
  const [competition, setCompetition] = useState([]);
  const [scoreH, setScoreH] = useState([]);
  const [scoreA, setScoreA] = useState([]);
  const [HomeTeam, setHomeTeam] = useState([]);
  const [AwayTeam, setAwayTeam] = useState([]);



  const getData = () => {
    axios
      .get(
        "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview"
      )
      .then((res) => {
        
        setCompetition(res.data.match.meta.competition.name);
        setScoreH(res.data.match.liveData.matchDetails.scores.total.home);
        setScoreA(res.data.match.liveData.matchDetails.scores.total.away);
        setHomeTeam(res.data.match.contestant[0].name)
        setAwayTeam(res.data.match.contestant[1].name)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getData(), []);

  function addFullTime() {
  }
  function addHalfTime() { }
  function addSecondHalf() { }


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="competition">
            <p>{competition}</p>
          </div>
          <div className="match-info">
            <h1>
              <img
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/x0vuldayagbmwazqjgbozu0v.png"
                alt="germany flag"
                width="75"
                height="75"
              ></img>
              {HomeTeam}
            </h1>
            <h1>
              <img
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/185xqd7s06sm2t85sxzfkrl.png"
                alt="france flag"
                width="75"
                height="75"
              ></img>
              {AwayTeam}
            </h1>
            <div className="score">
              <p>
                FT Score: {scoreH} : {scoreA}
              </p>
            </div>
          </div>
          <div className="NavBar">
            <ul>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a className="active" href="#general">
                  General
                </a>
              </li>
              <li>
                <a href="#ger">GER</a>
              </li>
              <li>
                <a href="#fra">FRA</a>
              </li>
              <li>
                <a href="#player">Player</a>
              </li>
            </ul>
          </div>
          <h2>General</h2>
          <div className="match-info">
            <div className="componentButtons">
              <FullTimeButton onClick={addFullTime} text="Full Time" />
               
               <HalfTimeButton onClick={addHalfTime} text="Half Time" />

               <SecondHalfButton onClick={addSecondHalf} text="Second Half" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
