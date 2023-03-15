import React, {useState, useEffect} from "react";
import './style.css'
import dayjs from "dayjs";
import {  deleteAMeetup, } from "../../utils/API.js";
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
            navigate("/dashboard")
        });
      };
    return (
    <div className='projectBox'>
        <h4>{props.Meetup.name}</h4>
        <p>date: {dayjs(props.Meetup.dateTime).format("MM/DD/YYYY")}</p>
        <p>{props.Meetup.address}</p>
        <p>{props.Meetup.description}</p>
        <br/>
        <button className="delete" type="button" onClick={handleDeleteBtnClick} >Delete</button>
       
    </div>
  )
}