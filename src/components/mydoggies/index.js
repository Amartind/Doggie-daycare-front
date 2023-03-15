import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllOwners, getAllPets, deletepet } from "../../utils/API"
import MydoggiesCard from "../mydoggiesCard"
import './style.css';
function MyDoggies(props) {
    const params = useParams();
    const [user, setUser] = useState({});
    // grab token from local storage
    localStorage.getItem('token')
    const fetchUser = () => {
        getAllOwners(props.userId).then((data) => {
            console.log(data)
            setUser(data);
        })
    }

    useEffect(() => {
        fetchUser();
    }, []);
    return (

        <div className="mydoggies-container">

            {user.username ? (
                user?.Pets?.map(pets => <MydoggiesCard
                    key={pets.petsId}
                    name={pets.name}
                    gender={pets.gender}
                    age={pets.age}
                    breed={pets.breed}
                    personality={pets.personality}
                    spayed_neutered={pets.spayed_neutered}
                    vaccinated={pets.vaccinated} />
                )) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}
export default MyDoggies