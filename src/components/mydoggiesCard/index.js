import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const MydoggiesCard = (props) => {

    const handleDelete = () => {
        // Calls the function passed from the parent component to delete the corresponding dog
        props.onDelete(props.id);
    }

    return (
        <div className="mydoggies-card">
            <div className="mydoggies-card__header">
                <h3>{props.name}</h3>
                <span className="mydoggies-card__header__breed">{props.breed} </span>
            </div>
            <div className="mydoggies-card__body">
                <div className="mydoggies-card__body__info">
                    <div className="mydoggies-card__body__info__row">
                        <span className="mydoggies-card__body__info__label">Gender: </span>
                        <span className="mydoggies-card__body__info__value">{props.gender} </span>
                    </div>
                    <div className="mydoggies-card__body__info__row">
                        <span className="mydoggies-card__body__info__label">Age: </span>
                        <span className="mydoggies-card__body__info__value">{props.age} </span>
                    </div>
                    <div className="mydoggies-card__body__info__row">
                        <span className="mydoggies-card__body__info__label">Personality: </span>
                        <span className="mydoggies-card__body__info__value">{props.personality} </span>
                    </div>
                </div>
                <div className="mydoggies-card__body__status">
                    <div className="mydoggies-card__body__status__item">
                        <span className="mydoggies-card__body__status__label">✂️: </span>
                        <span className={`mydoggies-card__body__status__value ${props.spayed_neutered ? 'mydoggies-card__body__status__value--yes' : 'mydoggies-card__body__status__value--no'}`}>{props.spayed_neutered ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="mydoggies-card__body__status__item">
                        <span className="mydoggies-card__body__status__label">💉: </span>
                        <span className={`mydoggies-card__body__status__value ${props.vaccinated ? 'mydoggies-card__body__status__value--yes' : 'mydoggies-card__body__status__value--no'}`}>{props.vaccinated ? 'Yes' : 'No'}</span>
                    </div>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default MydoggiesCard;
