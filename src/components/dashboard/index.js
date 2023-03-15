import React, {useState, useEffect} from "react";
import './style.css'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { editaMeetup, deleteAMeetup, getAllOwners } from "../../utils/API.js";
import DisplayMeetup from '../DisplayMeetups';

export default function Dashboard(props) {
  const params = useParams();
  const [user, setUser] = useState({});
  console.log("dashboard")
  console.log(props.userId)
  console.log(props.user)
  console.log("end dashboard")
  

  // useEffect(()=>{
  //   API
  // // })
  // if (params.id === )
  // match userid to meetup's owner id
  return (
    <div className='mainBody flex flex-auto flex-col'>
        { (props.userId && props.user.Meetups.length > 0) ? (
          <div className='Meetupbox'>
        <h3 className="Center">Doggie Dates You're Hosting</h3>
        {props.user.Meetups.map((meetup)=>(<DisplayMeetup Meetup={meetup}/>))}
       
        </div>
        ) :
        (<div><h2 className="title flex justify-center">Welcome! <h4><br/>If this is your first time here let me show you around!</h4><hr/></h2>
        <div className="flex justify-center flexME2 flex-auto flex-col">
          <h5 className='flex justify-center flex-auto'>To see events happening around you this weeked checkout the<Link className="bold" to="/currentplaydates">&nbsp;Local Play Dates&nbsp;</Link>section</h5>
          {/* <h5 className='flex justify-center flex-auto'> <Link className="bold" to="/localpups">&nbsp;Local Pups&nbsp;</Link> is a great place to see the great doggie frinds in your area that your pup could meet</h5> */}
          <h5 className='flex justify-center flex-auto'> If you feel like you're ready to have some doggie date time, head over to the <Link className="bold" to="/createaplaydate">&nbsp;Make a Play Date&nbsp;</Link> page and get ready to frisbee the day away!</h5>
          <h5 className='flex justify-center flex-auto'> If any of your info changes, you can update things in your <Link className="bold" to="/profile">&nbsp;Edit Profile&nbsp;</Link>section</h5>
          <h5 className='flex justify-center flex-auto'> If you have more then one little one you'll be bringing, head over to the <Link className="bold" to="/paddapooch">&nbsp;Add a Dog&nbsp;</Link> to add them to your profile</h5>
          <h5 className='flex justify-center flex-auto'> To see the dogs you currently have associated to your account, checkout your <Link className="bold" to="/mydoggies">&nbsp;My Dogs&nbsp;</Link>page</h5><br/>
        </div></div>)}
    </div>

  //   :
  
  // }

    
  )
}
