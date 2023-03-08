import React, { useState } from 'react';
import './style.css'

function CreateADate() {
    const [eventTitle, setEventTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [dateNotes, setDateNotes] = useState('');

    // Executing the value and name of the input on change
    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === "eventTitle") {
            return setEventTitle(value)
        } else if (name === "date") {
            return setDate(value)
        } else if (name === "time") {
            return setTime(value)
        } else if (name === "location") {
            return setLocation(value)
        } else if (name === "dateName") {
            return setDateNotes(value)
        }
    };

    // Prevents refreshing the page a default behavior
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <p>Make a Play Date</p>
            <form className="dateform grid p-4 grid-cols-2 grid-rows-6">
                <div className="grid p-4 grid-cols-1 grid-rows-5">
                    <input
                        value={eventTitle}
                        name="eventTitle"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Event Title'
                    />
                    
                        <input
                            value={date}
                            name="date"
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Date' />
                    
                        <input
                            value={time}
                            name='time'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Time' />
                    
                    
                        <input
                            value={location}
                            name='location'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Location' />
                    
                    
                        <input
                            value={dateNotes}
                            name='dateName'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Date Notes'
                        />
                    
                </div>
                <button type="button" onClick={handleFormSubmit}>Send</button>
            </form>



        </div>
    )
}

export default CreateADate
