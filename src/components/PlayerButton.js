import React from 'react'; 

const PlayerButton = (props) => { 
  
  return ( 
    
    <button className='addButton' onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {PlayerButton};