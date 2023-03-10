import React, { useState } from 'react';
import './style.css'

function Currentdates() {
    const [filterLocation, setFilterLocation] = useState('');
    const [savedLocation, setSavedLocation] = useState(false);
    const [radius, setRadius] = useState('');
    const [breed, setBreed] = useState('');
    

    // Executing the value and name of the input on change
    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === "filterLocation") {
            return setFilterLocation(value)
        } else if (name === "savedLocation") {
            if(true){
                // use saved location instead of value
                return setSavedLocation(value)
            }
        } else if (name === "radius") {
            return setRadius(value)
        } else if (name === "breed") {
            return setBreed(value)
        }
    };

    // Prevents refreshing the page a default behavior
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //display with fetch new filtered results
        
    };

    return (
        <div className="container">
            <p>View Play Dates</p>
            <form className="">
                <div className="filterContainer">
                    <input
                        value={filterLocation}
                        name="filterLocation"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Location'
                        className='filterLocation'
                    />
                    
                    <input
                        value={savedLocation}
                        name="savedLocation"
                        onChange={handleInputChange}
                        type='checkbox'
                        placeholder='Date' 
                        className='savedLocation'
                    />
                
                    <input
                        value={radius}
                        name='radius'
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Radius' 
                        className='radius'
                    />
                
                    <input
                        value={breed}
                        name='breed'
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Breed' 
                        className='breed'
                    />
                    <button className="dateButton" type="button" onClick={handleFormSubmit}>Send</button>
                </div>
                <div className='displayArea'>
                    <card className="displayCard">
                        <img src='../../public/assets/Puddle.png'></img>
                        <p className='displayName'>Puddle</p>
                        <p className='displayAge'>1</p>
                        <p className='displayBreed'>Standard Poodle</p>
                        <p className='displayPersonality'>Chill goofy</p>
                        <p className='displaySnipSnip'>No</p>
                        <p className='displayVaccinated'>Yes</p>
                        <p className='displayLocation'>Edith Moulton Park</p>
                    </card>

                </div>
            </form>



        </div>
    )
}

export default Currentdates
