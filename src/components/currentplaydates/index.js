import React, { useState } from 'react';
import  searchByRadius  from '../../utils/API';
import './style.css'
import DisplaySearch from '../displaySearch';


export default function Currentdates() {
    const [radius, setRadius] = useState('');
    const savedToken = localStorage.getItem("token");
    const [dataState, setDataState] = useState('');
    const [searchState, setSearchState] = useState('');

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
        <div className="mainBody flex flex-auto flex-col">
            <div className='nothing justify-center'>
            <h3 className="center">View Play Dates</h3>
                <form className="the-form flex flex-col justify-center max-h-fit">
                    <div className="row">
                        <select
                            className="col radius dateinput flex-auto inputfield"
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
                        <button
                            className="col button rounded datebutton loginbtn" 
                            type="submit"
                            onClick={handleFormSubmit}>
                            Search
                        </button>
                    </div>
                </form>
                <div className='flex justify-center flex-auto'>
                    {(dataState.length > 0) ? (
                        
                        <div>
                            <h4 className="center">Doggie Dates within {radius} miles of your location.</h4>
                            <div className='Meetupbox'>
                                {dataState.map((meetup) => (<DisplaySearch Meetup={meetup} />))}
                            </div>
                        </div>) :
                        (<div><h2 className="title flex justify-center">Welcome!</h2>
                        </div>)}
                </div>
            </div>
        </div>
    )
}