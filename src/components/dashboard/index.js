import React, {useState, useEffect} from "react";
import './style.css'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { editaMeetup, deleteAMeetup, getAllOwners } from "../../utils/API.js";


export default function Dashboard(props) {
  const params = useParams();
  const [user, setUser] = useState({});
  

  // useEffect(()=>{
  //   API
  // // })
  // if (params.id === )
  // match userid to meetup's owner id
  return (
    <div className='mainBody flex flex-auto flex-col'>
        { (props.userId && props.user.Meetups.length < 0) ? (<div>
          <h1>Shit</h1>
        </div>) :
        (<div><h2 className="title flex justify-center">Welcome! <h4><br/>If this is your first time here let me show you around!</h4><hr/></h2>
        <div className="flex justify-center flexME2 flex-auto flex-col">
          {/* <h4 className="flex justify-center flex-auto">If this is your first time here let me show you around!</h4><br/> */}
          <h5 className='flex justify-center flex-auto'>To see events happening around you this weeked checkout the<Link className="bold" to="/currentplaydates">&nbsp;Local Play Dates&nbsp;</Link>section</h5>
          {/* <h5 className='flex justify-center flex-auto'> <Link className="bold" to="/localpups">&nbsp;Local Pups&nbsp;</Link> is a great place to see the great doggie frinds in your area that your pup could meet</h5> */}
          <h5 className='flex justify-center flex-auto'> If you feel like you are ready to have some doggie date time head over to the <Link className="bold" to="/createaplaydate">&nbsp;Make a Play Date&nbsp;</Link> page and get ready to frisbee the day away!</h5>
          <h5 className='flex justify-center flex-auto'> If any of your info changes, you can update things in your <Link className="bold" to="/profile">&nbsp;Profile Page&nbsp;</Link></h5><br/>
        </div></div>)}
    </div>

  //   :
  
  // }

    
  )
}
