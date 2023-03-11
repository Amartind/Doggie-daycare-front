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
            if(savedLocation){
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
        //display with fetch new filtered results
        
    };

    return (
        <div className="datemaincontainer  flex justify-center h-screen m-1">
            <div className=' flex flex-col '>

                <p className='title flex justify-self-center'>View Play Dates</p>
                <form className="dateform flex flex-col max-h-fit ">
                    <div className="filterContainer flex flex-auto flex-row">
                        <input
                            value={filterLocation}
                            name="filterLocation"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Location'
                            className='filterLocation dateinput flex-auto'
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

                        <input
                            value={radius}
                            name='radius'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Radius' 
                            className='radius dateinput flex-auto'
                        />

                        <input
                            value={breed}
                            name='breed'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Breed' 
                            className='breed dateinput flex-auto'
                        />
                        <button className="dateButton" type="button" onClick={handleFormSubmit}>Send</button>
                    </div>
                    <div className='displayArea flex flex-row gap-1'>
                        
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
                        <card className="displayCard flex flex-col flex-auto ">
                            <img src='../../public/assets/Puddle.png' className='object-contain md:object-scale-down pupimg' alt='petnamehere2'></img>
                            <p className='displayName'>Puddle</p>
                            <p className='displayAge'>1</p>
                            <p className='displayBreed'>Standard Poodle</p>
                            <p className='displayPersonality'>Chill goofy</p>
                            <p className='displaySnipSnip'>No</p>
                            <p className='displayVaccinated'>Yes</p>
                            <p className='displayLocation '>Edith Moulton Park</p>
                        </card>
                        <card className="displayCard flex flex-col flex-auto ">
                            <img src='../../public/assets/Puddle.png' className='object-contain md:object-scale-down pupimg' alt='petnamehere3'></img>
                            <p className='displayName'>Puddle</p>
                            <p className='displayAge'>1</p>
                            <p className='displayBreed'>Standard Poodle</p>
                            <p className='displayPersonality'>Chill goofy</p>
                            <p className='displaySnipSnip'>No</p>
                            <p className='displayVaccinated'>Yes</p>
                            <p className='displayLocation '>Edith Moulton Park</p>
                        </card>
                        <card className="displayCard flex flex-col flex-auto ">
                            <img src='../../public/assets/Puddle.png' className='object-contain md:object-scale-down pupimg' alt='petnamehere4'></img>
                            <p className='displayName'>Puddle</p>
                            <p className='displayAge'>1</p>
                            <p className='displayBreed'>Standard Poodle</p>
                            <p className='displayPersonality'>Chill goofy</p>
                            <p className='displaySnipSnip'>No</p>
                            <p className='displayVaccinated'>Yes</p>
                            <p className='displayLocation '>Edith Moulton Park</p>
                        </card>
                        <card className="displayCard flex flex-col flex-auto ">
                            <img src='../../public/assets/Puddle.png' className='object-contain md:object-scale-down pupimg' alt='petnamehere5'></img>
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
