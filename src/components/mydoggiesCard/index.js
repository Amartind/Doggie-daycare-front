import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const MydoggiesCard = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            name={props.name}
            gender={props.gender}
            age={props.age}
            breed={props.breed}
            personality={props.personality}
            snipsnip={props.spayed_neutered}
            vaccinated={props.vaccinated}
        </div>

    )
}

export default MydoggiesCard;
