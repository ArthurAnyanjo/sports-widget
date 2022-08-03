import React from 'react'; 

const HalfTimeButton = (props) => { 
  
  return ( 
    
    <button className='addButton' onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {HalfTimeButton};