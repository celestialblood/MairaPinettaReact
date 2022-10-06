import React from 'react';
import './Greeting.css'; 

const Greeting = ({greeting}) => {

    return(

        <div>          
       <h3>{greeting}</h3>
       </div>
  
    )
    }

export default Greeting;
