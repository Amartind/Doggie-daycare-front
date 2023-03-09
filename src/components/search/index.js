import React, { useState } from "react";
import './style.css'


function Search() {
    // Anything that needs state tracking goes here...
    // const [fullname, setFullName] = useState('');



    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        // TODO: write form element change code
    };


    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    };
    return (
        <div className="container">
            <p>Welcome <fullname /></p>
            <form className="signupform grid gap-4 grid-cols-1 grid-rows-6">
                <input
                    value={fullname}
                    name="fullname"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Full name"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default Search