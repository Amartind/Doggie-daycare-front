import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllOwners, getAllPets } from "../../utils/API"
import './style.css';

function MyDoggies(props) {
    const params = useParams();
    console.log(params)
    const [user, setUser] = useState({});

    useEffect(() => {
        getAllOwners(params.id).then(data => {
            setUser(data)
        })
    }, []);

    const handleDelete = (id) => {
        const updatedPets = pets.filter((pet) => pet.id !== id);
        setPets(updatedPets);
        props.updatePets(updatedPets);
    };

    return (
        <div className="mydoggies-container">
            <h1>{pets.petsName} My Doggies</h1>
            {user?.Pets?.map(pets => <MyDoggies
                key={pets.petsId}
                name={pets.petsName}
                gender={pets.petsGender}
                age={pets.petsAge}
                breed={pets.petsBreed}
                personality={pets.petsPersonality}
                snipsnip={pets.spaye_neautered}
                vaccinated={pets.vaccinated} />)}
        </div>
    );
}

export default MyDoggies;

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