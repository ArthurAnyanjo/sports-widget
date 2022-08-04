import {useState} from 'react';

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

  const handleClick = event => {

    setIsShown(current => !current);
  };

  return (
    <div>
      <button className="addButton" onClick={handleClick}>{props.text}</button>

      {isShown && (
        <div>
          <h2>Some Content</h2>
          </div>
      
      )}
    </div>
  );
}
export {HalfTimeButton};