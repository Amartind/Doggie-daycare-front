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
    // const fetchUser = () => {
    //     getAllOwners(params.id).then(data => {
    //         setUser(data)
    //         console.log(user.Pets)
    //     })
    // }
    // const handleDelete = (id) => {
    //     const updatedPets = pets.filter((pet) => pet.id !== id);
    //     setPets(updatedPets);
    //     deletepet(id of de);
    // };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="mydoggies-container">
            <h1> My Doggies</h1>
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
// const { id } = useParams();
// const [pets, setPets] = useState([]);
// const [isMyPage, setIsMyPage] = useState(false);
// const [petsName, setPetsName] = useState('');
// const [petsGender, setPetsGender] = useState('');
// const [petsAge, setPetsAge] = useState('');
// const [petsBreed, setPetsBreed] = useState('');
// const [petsPersonality, setPetsPersonality] = useState = ('');
// const [snipSnip, setSnipSnip] = useState('');
// const [vaccinated, setVaccinated] = useState('');
{/* <p className="flex justify-center text-lg"> My Doggies</p>
            <div className="dog-container">
                {user ? Pets ? map((pet) => (
                    <div className="dog" key={pet.id}>
                        <div className="dog-info">
                            <p>Dog Name: {petsName}</p>
                            <p>Gender: {petsGender}</p>
                            <p>Age: {petsAge}</p>
                            <p>Breed: {petsBreed}</p>
                            <p>Personality: {petsPersonality}</p>
                            <p>Snip Snip: {snipSnip}</p>
                            <p>Vaccinated: {vaccinated}</p>
                            <button onClick={() => handleDelete(pet.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div> */}