import React from "react";
import './style.css'
import DogBL from "./dogpfp1.PNG";
import DogBM from "./parkplay2.PNG";
import DogTL from "./parkplay.PNG";

export default function Hompage() {
    return (
      <div className="box">
        <div className="flex-me2">
        <img className="topimage" src={DogTL} alt="Cute Dog"/>
        <h4 className="text">Are you feeling like your dog needs more enrichment with other dogs? <br/> Are you a recluse and don't want to socialize? <br/> Don't worry we are the app for you! Sign up with like minded people around your city and you can set up doggie play dates at specified locations nearby!</h4>
        
        <h4></h4>
        </div>
        <div className="flex-me">
        <img className="bottomimage" src={DogBL} alt="Cute dogs playing"/>
        <img className="bottomimage" src={DogBM} alt="Another group of cute dogs playing"/>
        
        </div>
      </div>
    )
  }