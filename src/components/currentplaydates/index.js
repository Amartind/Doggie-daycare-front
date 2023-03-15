import React, { useState } from 'react';
import { searchByRadius } from '../../utils/API';
import './style.css'
import DisplaySearch from '../displaySearch';


export default function Currentdates() {
    const [radius, setRadius] = useState('');
    const savedToken = localStorage.getItem("token");
    const [dataState, setDataState] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "radius") {
            return setRadius(value)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const searchResults = searchByRadius(radius, savedToken)
            .then((data) => {
                setDataState(data);
                for (let item of data) {
                    console.log(item);
                }
            });
            console.log(searchResults);
    };

    return (
        <div className="datemaincontainer  flex justify-center h-screen m-1">
            <div className=' flex flex-col '><br />
                <p className='title flex justify-center text-lg'>View Play Dates</p><br />
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
                </form>
                <div className='displayArea flex flex-row gap-1 flex-wrap'>
                    {(dataState.length > 0) ? (
                        <div className='Meetupbox'>
                            <h3 className="Center">Doggie Dates within {radius} miles of your location.</h3>
                            {dataState.map((meetup) => (<DisplaySearch Meetup={meetup} />))}
                        </div>) :
                        (<div><h2 className="title flex justify-center">Welcome! <h4><br />If this is your first time here let me show you around!</h4><hr /></h2>
                        </div>)}
                </div>
            </div>
        </div>
    )
}