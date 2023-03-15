import React, { useState, useEffect  } from 'react';
import { useParams } from "react-router-dom";
import './style.css'
import { makeAMeetup, getAllOwners, getAllMeetups} from "../../utils/API";
import { useNavigate } from "react-router-dom";



function CreateADate(props) {
    const params = useParams();
    const [eventTitle, setEventTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [dateNotes, setDateNotes] = useState('');
    const navigate = useNavigate();   
    const [user, setUser] = useState({}); 
    // Executing the value and name of the input on change

    const fetchUser = () => {
        getAllOwners(props.userId).then((data) => {
          setUser(data);
                
        })
      }

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === "eventTitle") {
            return setEventTitle(value)
        } else if (name === "date") {
            return setDate(value)
        } else if (name === "location") {
            return setLocation(value)
        } else if (name === "dateName") {
            return setDateNotes(value)
        }
    };

    // Prevents refreshing the page a default behavior
    const handleFormSubmit = (e) => {
        e.preventDefault();

        var dateObj = {
            name: eventTitle,
            dateTime: date,
            description: dateNotes,
            address: location,
            OwnerId: props.userId
        }
        console.log(dateObj)
        console.log(props.token)
        console.log("__begin_meetup_submit__")
        makeAMeetup(dateObj, props.token).then(_=>{
            setEventTitle("");
            setDate("");
            setLocation("");
            setDateNotes("")
            getAllOwners(props.userId).then((data)=>{
                props.setUser(data)
                navigate("/dashboard")
            })
        })
    };
    
    useEffect(() => {
        fetchUser();
      }, [props.userId, params.id]);

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
                            value={location}
                            name='location'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Full Location Address' 
                            className='datefield inputfield'
                        />


                        <input
                            value={dateNotes}
                            name='dateName'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Date Notes. Things you might want people to know...'
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
