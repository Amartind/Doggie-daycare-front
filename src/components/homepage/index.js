import React from "react";
import './style.css'
import DogBL from "./dogpfp1.PNG";
import DogBM from "./parkplay2.PNG";
import DogBR from "./dogpfp5.PNG";
import DogTL from "./parkplay.PNG";

export default function Homepage() {
    return (
      <div className="box">
        <div className="flex flex-wrap gap-5 justify-around flex-auto">
          <img className="topimage md:object-scale-down flex-auto" src={DogTL} alt="Cute Dog"/>
          <h4 className="text flex flex-wrap flex-auto">Are you feeling like your dog needs more enrichment with other dogs? <br/> Are you a recluse and don't want to socialize? <br/> Don't worry we are the app for you! Sign up with like minded people around your city and you can set up doggie play dates at specified locations nearby!</h4>
        
        
        </div>
        <div className="flex flex-wrap justify-around flex-auto">
          <img className="bottomimage md:object-scale-down flex-auto" src={DogBL} alt="Cute dogs playing"/>
          <img className="bottomimage md:object-scale-down flex-auto" src={DogBM} alt="Another group of cute dogs playing"/>
          <img className="bottomimage md:object-scale-down flex-auto" src={DogBR} alt="Another group of cute dogs playing"/>
        </div>
      </div>
    )
  }