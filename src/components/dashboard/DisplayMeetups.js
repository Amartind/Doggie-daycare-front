import React, {useState, useEffect} from "react";
import './style.css'
import dayjs from "dayjs";
import {  deleteAMeetup, getAllOwners } from "../../utils/API.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DisplayMeetup (props) {
  const params = useParams();
  const navigate = useNavigate();
  const handleDeleteBtnClick = (e) => {
   
    console.log(props.Meetup.id)
    console.log(props.token)
    
    console.log("end dashboard")
    deleteAMeetup(props.Meetup.id, props.token).then((data) => {
      console.log(data)
        getAllOwners(props.userId).then(data=>{
          props.setUser(data)
          navigate("/dashboard")
        })
      });

      };
    return (
    <div className='projectBox'>
        <h4 className="underline">{props.Meetup.name}</h4>
        <p>Date: {dayjs(props.Meetup.dateTime).format("MM/DD/YYYY")}</p>
        <p>{props.Meetup.address}</p>
        <p>{props.Meetup.description}</p>
        <br/>
        <button className="delete" type="button" onClick={handleDeleteBtnClick} >Delete</button>
       
    </div>
  )
}