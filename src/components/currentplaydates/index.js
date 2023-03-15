import React, { useState } from 'react';
import { searchByRadius } from '../../utils/API';
import './style.css'



function Currentdates() {
    const [filterLocation, setFilterLocation] = useState('');
    const [savedLocation, setSavedLocation] = useState(false);
    const [radius, setRadius] = useState('');
    const [breed, setBreed] = useState('');
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
        return
    }

    // get the default search data for 20 miles.
    console.log("Calling the searchByRadius function!");
    const searchResults = searchByRadius(20, savedToken)
        .then((response) => {
            if (response) {
                console.log(response);
            }
        }
        );
    // Executing the value and name of the input on change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "filterLocation") {
            return setFilterLocation(value)
        } else if (name === "savedLocation") {
            if (savedLocation) {
                // use saved location instead of value
                return setSavedLocation(false)
            }
            else return setSavedLocation(true)
        } else if (name === "radius") {
            return setRadius(value)
        } else if (name === "breed") {
            return setBreed(value)
        }
    };


    // Prevents refreshing the page a default behavior
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="datemaincontainer  flex justify-center h-screen m-1">
            <div className=' flex flex-col '>
                <p className='title flex justify-center'>View Play Dates</p>
                <form className="dateform flex flex-col max-h-fit">
                    <div className="filterContainer flex flex-auto flex-row flex-wrap">
                        <input
                            value={filterLocation}
                            name="filterLocation"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Location'
                            className='filterLocation dateinput flex-auto inputfield'
                        />
                        <div className='flex flex-col max-h-fit'>
                            <sub>Use saved location?</sub>
                            <input
                                value={savedLocation}
                                name="savedLocation"
                                onChange={handleInputChange}
                                type='checkbox'
                                className='savedLocation dateinput flex-auto'
                            />
                        </div>
                        <select
                            className="radius dateinput flex-auto inputfield"
                            data-te-select-clear-button="true"
                            data-te-select-placeholder="Example placeholder"
                            onChange={handleInputChange}
                            value={radius}
                            name="radius">
                            <option value="5">5 miles</option>
                            <option value="10">10 miles</option>
                            <option value="25">25 miles</option>
                            <option value="50">50 miles</option>
                            <option value="100">100 miles</option>
                            <option value="250">250 miles</option>
                        </select>
                        <input
                            value={breed}
                            name='breed'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Breed'
                            className='breed dateinput flex-auto inputfield'
                        />
                        <button
                            className="dateButton"
                            type="button"
                            onClick={handleFormSubmit}>
                            Search
                        </button>
                    </div>
                    <div className='displayArea flex flex-row gap-1 flex-wrap'>
                        <card className="displayCard flex flex-col flex-auto ">
                            <img src='../../public/assets/Puddle.png' className='object-contain md:object-scale-down pupimg' alt='petnamehere'></img>
                            <p className='displayName'>Puddle</p>
                            <p className='displayAge'>1</p>
                            <p className='displayBreed'>Standard Poodle</p>
                            <p className='displayPersonality'>Chill goofy</p>
                            <p className='displaySnipSnip'>No</p>
                            <p className='displayVaccinated'>Yes</p>
                            <p className='displayLocation '>Edith Moulton Park</p>
                        </card>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Currentdates
