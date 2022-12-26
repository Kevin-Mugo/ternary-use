import React from "react";
import './App.css'

export default function App(){

  const isGoingOut = false;



  return(
    <div className = "state">
      <h1 className = "state--title">Do i feel like going out tonight?</h1>
      <div className = "state--value">
        
       <h1>{isGoingOut === true ? "yes" : "No"}</h1>
    </div>
    </div>
  )

};