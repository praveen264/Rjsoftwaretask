import { Height } from '@material-ui/icons';
import React, { useState } from 'react';
import './Shape.css';

function Shape() {
    const [color,setName]=useState("red");
const change = async(event)=>{
   if(color=='green'){ setName("red")}
   else
   {
    setName("green")
   }
}
  return (
      <>
    <div style={{backgroundColor: color}} className="Shape">
      HELLO
    </div>
    <button type="button" onClick={change}>Press</button>
    {
        color=='green'?<h1 className="message">The color is changed to green</h1>:<h1 className="message">The color is  red</h1>
    }
    </>
  );
}

export default Shape;
