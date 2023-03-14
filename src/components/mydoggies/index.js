import React from 'react';
import './style.css';

function MyDoggies(props) {
    const { dogs } = props;

    const handleDelete = (id) => {
        // create a new array with all dogs except for the one with the matching id
        const updatedDogs = dogs.filter((dog) => dog.id !== id);
        // call a function to update the state of the dogs in the parent component
        props.updateDogs(updatedDogs);
    };

    return (
        <div className="mydoggies-container">
            <p>My Doggies</p>
            <div className="dog-container">
                {dogs && dogs.map((dog) => (
                    <div className="dog" key={dog.id}>
                        <div className="dog-info">
                            <p>Dog Name: {dog.name}</p>
                            <p>Gender: {dog.gender}</p>
                            <p>Age: {dog.age}</p>
                            <p>Breed: {dog.breed}</p>
                            <p>Personality: {dog.personality}</p>
                            <p>Snip Snip: {dog.snipsnip}</p>
                            <p>Vaccinated: {dog.vaccinated}</p>
                            <button onClick={() => handleDelete(dog.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MyDoggies;


