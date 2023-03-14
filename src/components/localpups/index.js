import React from "react";
import './style.css'
const {   getAllPets,
  getAllOwners,
  login,
  isValidToken,
  signup,
  addapet,
  deletepet,
  editOwner,
  getAllMeetups,
  makeAMeetup,
  editaMeetup,
  deleteAMeetup } = require("../../utils/API.js");

function Localpups(props) {
  return (
    <div>Local Pups!!!</div>
  )
}

export default Localpups