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
        alert('Date added');
        setEventTitle("");
        setDate("");
        setTime("");
        setLocation("");
        setDateNotes("")
    };

    return (
        <div className="container flex flex-col justify-center justify-self-center rounded flex-auto"><br/>
            <p className='flex justify-center text-lg'>Make a Play Date 📅 </p>
            <br/>
            {/* <div className='flex justify-center flex-auto'> */}
                <form className="grid centerMe evil p-4 grid-cols-1 grid-rows-5 rounded-md">
                    <div className="grid gap-4 grid grid-cols-1 grid-rows-5">
                        <input
                            value={eventTitle}
                            name="eventTitle"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Event Title'
                            className='inputfield'
                        />

                        <input
                            value={date}
                            name="date"
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Date' 
                            className='datefield inputfield'
                        />

                        <input
                            value={time}
                            name='time'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Time' 
                            className='datefield inputfield'
                        />


                        <input
                            value={location}
                            name='location'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Location' 
                            className='datefield inputfield'
                        />


                        <input
                            value={dateNotes}
                            name='dateName'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Date Notes'
                            className='datefield py-8 inputfield'
                        />
                    <br/>
                        <button className="datebutton rounded order-last button" type="button" onClick={handleFormSubmit}>Send</button>
                    </div>
                </form>
            </div>



        // </div>
    )
}

export default CreateADate
