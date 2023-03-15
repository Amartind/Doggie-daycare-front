import React from 'react';
import './style.css';

function MyDoggies(props) {
    const [user, setUser] = useState({});
    const [petsName, setPetsName] = useState('');
    const [petsGender, setPetsGender] = useState('');
    const [petsAge, setPetsAge] = useState('');
    const [petsBreed, setPetsBreed] = useState('');
    const [petsPersonality, setPetsPersonality] = useState('');
    const [petsSnipsnip, setPetsSnipsnip] = useState('');
    const [petsVaccinated, setPetsVaccinated] = useState('');
    const fetchUser = () => {
        getAllPets(params.id)
    }


    const handleDelete = (id) => {
        // create a new array with all dogs except for the one with the matching id
        const updatedPets = pets.filter((pet) => pet.id !== id);
        // call a function to update the state of the dogs in the parent component
        props.updatePets(updatedPets);
    };

    return (
        <div className="mydoggies-container">
            <p className='flex justify-center text-lg'> My Doggies</p>
            <div className="dog-container">
                {pets && pets.map((dog) => (
                    <div className="dog" key={dog.id}>
                        <div className="dog-info">
                            <p>Dog Name: {pets.name}</p>
                            <p>Gender: {pets.gender}</p>
                            <p>Age: {pets.age}</p>
                            <p>Breed: {pets.breed}</p>
                            <p>Personality: {pets.personality}</p>
                            <p>Snip Snip: {pets.snipsnip}</p>
                            <p>Vaccinated: {pets.vaccinated}</p>
                            <button onClick={() => handleDelete(pets.id)}>Delete</button>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}


export default MyDoggies;


