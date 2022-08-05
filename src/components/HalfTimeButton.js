import React, { useState, useEffect } from "react";
import axios from "axios";

const HalfTimeButton = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [possesionH, setPossessionH] = useState([]);
  const [possesionA, setPossessionA] = useState([]);
  const [shotsH, setShotsH] = useState([]);
  const [shotsA, setShotsA] = useState([]);
  const [shotsHTar, setShotsHTar] = useState([]);
  const [shotsATar, setShotsATar] = useState([]);
  const [cornerH, setCornersH] = useState([]);
  const [cornerA, setCornersA] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview"
      )
      .then((res) => {
        console.log(res.data);
        setPossessionH(res.data.match.liveData.lineups.home.stats[3].fh);
        setPossessionA(res.data.match.liveData.lineups.away.stats[1].fh);
        setShotsH(res.data.match.liveData.lineups.home.stats[0].fh);
        setShotsA(res.data.match.liveData.lineups.away.stats[3].fh);
        setShotsHTar(res.data.match.liveData.lineups.home.stats[1].fh);
        setShotsATar(res.data.match.liveData.lineups.away.stats[2].fh);
        setCornersH(res.data.match.liveData.lineups.home.stats[2].fh);
        setCornersA(res.data.match.liveData.lineups.away.stats[4].fh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getData(), []);

  const handleClick = event => {

    setIsShown(current => !current);
  };

  return (
    <div>
      <button className="addButton" onClick={handleClick}>{props.text}</button>

      {isShown &&  (
        <div className="stats">
           <p className="widget-words">Possesion</p>
          <p className="home-words">{possesionH}%</p>
          <progress className="home-progress" value={possesionH} max = {100}>{possesionH}</progress>
          <p className="away-words">{possesionA}%</p>
          <progress className="away-progress" value={possesionA} max = {100}>{possesionA}%</progress>

          <p className="widget-words">Shots</p>
          <p className="home-words">{shotsH}</p>
          <progress className="home-progress" value={shotsH} max = {20}></progress>
          <p className="away-words">{shotsA}</p>
          <progress className="away-progres" value={shotsA} max ={20}></progress>

          <p className="widget-words">Shots on Target</p>
          <p className="home-words">{shotsHTar}</p>
          <progress className="home-progress" value={shotsHTar} max ={10}></progress>
          <p className="away-words">{shotsATar}</p>
          <progress className="away-progres" value={shotsATar} max ={10}></progress>

          <p className="widget-words">Corners</p>
          <p className="home-words">{cornerH}</p>
          <progress className="home-progress" value={cornerH} max ={10}></progress>
          <p className="away-words">{cornerA}</p>
          <progress className="away-progres" value={cornerA} max ={10}></progress>
          
          </div>
      )}
    </div>
  );
}
export {HalfTimeButton};