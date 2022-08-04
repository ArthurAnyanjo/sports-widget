import React, { useState, useEffect } from "react";
import axios from "axios";

const SecondHalfButton = (props) => {
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
        setPossessionH(res.data.match.liveData.lineups.home.stats[3].sh);
        setPossessionA(res.data.match.liveData.lineups.away.stats[1].sh);
        setShotsH(res.data.match.liveData.lineups.home.stats[0].sh);
        setShotsA(res.data.match.liveData.lineups.away.stats[3].sh);
        setShotsHTar(res.data.match.liveData.lineups.home.stats[1].sh);
        setShotsATar(res.data.match.liveData.lineups.away.stats[2].sh);
        setCornersH(res.data.match.liveData.lineups.home.stats[2].sh);
        setCornersA(res.data.match.liveData.lineups.away.stats[4].sh);
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
          <progress className="home-progress" value={possesionH} max = {100}>{possesionH}50%</progress>
          <progress className="away-progress" value={possesionA} max = {100}>{possesionA}%</progress>

          <p className="widget-words">Shots</p>
          <progress className="home-progress" value={shotsH} max = {20}></progress>
          <progress className="away-progres" value={shotsA} max ={20}></progress>

          <p className="widget-words">Shots on Target</p>
          <progress className="home-progress" value={shotsHTar} max ={10}></progress>
          <progress className="away-progres" value={shotsATar} max ={10}></progress>

          <p className="widget-words">Corners</p>
          <progress className="home-progress" value={cornerH} max ={10}></progress>
          <progress className="away-progres" value={cornerA} max ={10}></progress>
          </div>
      )}
    </div>
  );
}
export {SecondHalfButton};