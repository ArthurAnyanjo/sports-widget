import React from 'react'; 

const FullTimeButton = (props) => { 
  
  return ( 
    
    <button className='addButton' onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {FullTimeButton};