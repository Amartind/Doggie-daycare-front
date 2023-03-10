import React from 'react';
import './style.css'

function MyDoggies(props) {
    return (
        <div className="mydoggies-container">
            <p>My Doggies</p>
            <div className="dog-container">
                <div className="dog">
                    {/* <img cloudinary image /> */}
                    <div className="dog-info">
                        {/* can change dog id when complete */}
                        <p>Dog Name: {props.dog1.dogname}</p>
                        <p>Gender: {props.dog1.doggender}</p>
                        <p>Age: {props.dog1.dogage}</p>
                        <p>Breed: {props.dog1.dogbreed}</p>
                        <p>Personality: {props.dog1.dogpersonality}</p>
                        <p>Snip Snip: {props.dog1.snipsnip}</p>
                        <p>Vaccinated: {props.dog1.vaccinated}</p>
                    </div>
                </div>
                <div className="dog">
                    {/* <img cloudinary image /> */}
                    <div className="dog-info">
                        {/* can change dog id when complete */}
                        <p>Dog Name: {props.dog2.dogname}</p>
                        <p>Gender: {props.dog2.doggender}</p>
                        <p>Age: {props.dog2.dogage}</p>
                        <p>Breed: {props.dog2.dogbreed}</p>
                        <p>Personality: {props.dog2.dogpersonality}</p>
                        <p>Snip Snip: {props.dog2.snipsnip}</p>
                        <p>Vaccinated: {props.dog2.vaccinated}</p>
                    </div>
                </div>
                <div className="dog">
                    {/* <img cloudinary image /> */}
                    <div className="dog-info">
                        {/* can change dog id when complete */}
                        <p>Dog Name: {props.dog3.dogname}</p>
                        <p>Gender: {props.dog3.doggender}</p>
                        <p>Age: {props.dog3.dogage}</p>
                        <p>Breed: {props.dog3.dogbreed}</p>
                        <p>Personality: {props.dog3.dogpersonality}</p>
                        <p>Snip Snip: {props.dog3.snipsnip}</p>
                        <p>Vaccinated: {props.dog3.vaccinated}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyDoggies;
