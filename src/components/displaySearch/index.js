import React from 'react'


export default function DisplaySearch(props) {
    console.log(props)
    return (
        <div className='projectBox'>
            <h4>{props.Meetup.name}</h4>
            <p>{props.Meetup.dateTime}</p>
            <p>{props.Meetup.address}</p>
            <p>{props.Meetup.description}</p>
            <p>{props.Meetup.distance} miles away.</p>
        </div>
    )
}