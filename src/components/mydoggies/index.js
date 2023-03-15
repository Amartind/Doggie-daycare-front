import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPets } from "../../utils/API"
import './style.css';

function MyDoggies(props) {
    const { id } = useParams();
    const [pets, setPets] = useState([]);
    const [isMyPage, setIsMyPage] = useState(false);
    const [petsName, setPetsName] = useState('');
    const [petsGender, setPetsGender] = useState('');
    const [petsAge, setPetsAge] = useState('');
    const [petsBreed, setPetsBreed] = useState('');
    const [petsPersonality, setPetsPersonality] = useState = ('');
    const [snipSnip, setSnipSnip] = useState('');
    const [vaccinated, setVaccinated] = useState('');

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const pets = await getAllPets(id);
                setPets(pets);
                setIsMyPage(props.userId === id);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPets();
    }, [id, props.userId]);

    const handleDelete = (id) => {
        const updatedPets = pets.filter((pet) => pet.id !== id);
        setPets(updatedPets);
        props.updatePets(updatedPets);
    };

    return (
        <div className="mydoggies-container">
            <p className="flex justify-center text-lg"> My Doggies</p>
            <div className="dog-container">
                {pets &&
                    pets.map((pet) => (
                        <div className="dog" key={pet.id}>
                            <div className="dog-info">
                                <p>Dog Name: {pet.name}</p>
                                <p>Gender: {pet.gender}</p>
                                <p>Age: {pet.age}</p>
                                <p>Breed: {pet.breed}</p>
                                <p>Personality: {pet.personality}</p>
                                <p>Snip Snip: {pet.snipsnip}</p>
                                <p>Vaccinated: {pet.vaccinated}</p>
                                <button onClick={() => handleDelete(pet.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MyDoggies;
