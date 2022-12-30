import React from "react";
import './App.css'

export default function App(){

  const [isGoingOut , setIsGoingOUT]  = React.useState(true);
function Set(){
  setIsGoingOUT(prevState => !prevState);
};


  return(
    <div className = "state">
      <h1 className = "state--title">Do i feel like going out tonight?</h1>
      <div onClick={Set} className = "state--value">
        
       <h1>{isGoingOut ? "Yes" : "No"}</h1>
    </div>
    </div>
  )

};