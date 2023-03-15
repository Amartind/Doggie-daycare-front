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
        const searchResults = searchByRadius(radius, savedToken)
        .then((data)=>{
            console.log(data)
            for (let item of data){
                console.log(item.distance);
            }
        });
    };

    return (
        <div className="datemaincontainer  flex justify-center h-screen m-1">
            <div className=' flex flex-col '><br/>
                <p className='title flex justify-center text-lg'>View Play Dates</p><br/>
                <form className="dateform flex flex-col max-h-fit">
                    <div className="filterContainer flex flex-auto flex-row flex-wrap">
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
                            <option value="5000">5000 miles</option>
                        </select>
                     
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
                            <p className='displayAge'>Age: 1</p>
                            <p className='displayBreed'> Breed: Standard Poodle</p>
                            <p className='displayPersonality'>Personality: Chill goofy</p>
                            <p className='displaySnipSnip'>✂️ No</p>
                            <p className='displayVaccinated'>💉 Yes</p>
                            <p className='displayLocation '>Edith Moulton Park</p>
                        </card>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Currentdates
