import React from 'react'

export default function DisplayMeetup (props) {
    console.log(props.Meetup)
    return (
    <div className='projectBox'>
        <h4>{props.Meetup.name}</h4>
        <p>{props.Meetup.dateTime}</p>
        <p>{props.Meetup.address}</p>
        <p>{props.Meetup.description}</p>
        {/* <h5>Pups Hosting</h5> */}
        {/*props.Meetup.Pets.map(Pet=>{
            <>
            <p>{Pet.name}</p>
            <p>{Pet.gender}</p>
            <p>{Pet.age}</p>
            <p>{Pet.breed}</p>
            <p>{Pet.personality}</p>
            <p>{Pet.spayed_neutered}</p>
            <p>{Pet.vaccinated}</p>
            </>
        })*/}
    </div>
  )
}