import React from 'react'
import dayjs from 'dayjs'


export default function DisplaySearch(props) {
    console.log(props)
    return (
        <div className='jasonsBox'>
            <h4><b>{props.Meetup.name}</b></h4>
            <p>date: {dayjs(props.Meetup.dateTime).format("MM/DD/YYYY")}</p>
            <p>{props.Meetup.address}</p>
            <p>{props.Meetup.description}</p>
            <p><b>{props.Meetup.distance} miles away.</b></p>
        </div>
    )
}