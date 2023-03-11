import React, { useState } from "react";
import './style.css'


function Addpooch() {
    const [dogname, setDogName] = useState('');
    const [doggender, setDogGender] = useState('');
    const [dogage, setDogAge] = useState('');
    const [dogbreed, setDogBreed] = useState('');
    const [dogpersonality, setDogPersonality] = useState('');
    const [snipsnip, setSnipSnip] = useState(false);
    const [vaccinated, setVaccinated] = useState(false);
    const maleSelector = document.getElementById("male")
    // const femaleSelector = document.getElementById("female")
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      if (name === 'dogname'){
          return setDogName(value)
      } else if (name === 'doggender'){
        if (maleSelector){
            console.log("male")
          return setDogGender("Male")
        } else return setDogGender("Female")
      } else if (name === 'dogage'){
          return setDogAge(value)
      } else if (name === 'dogbreed'){
          return setDogBreed(value)
      } else if (name === 'dogpersonality'){
          return setDogPersonality(value)
      } else if (name === 'snipsnip'){
        if(snipsnip){
            return setSnipSnip(false)
        } 
        else return setSnipSnip(true)
      } else if (name === 'vaccinated'){
        if(vaccinated){
            return setVaccinated(false)
        } 
        else return setVaccinated(true)
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      
    };
  
    return (
      <div className="dogcontainer flex flex-col flex-auto">
        <p className="flex justify-center text-lg">Tell Us About Your Dog</p>
        <form className="dogform grid p-2 grid-cols-2 grid-rows-6">
            <div className="grid gap-4 grid-cols-1 grid-rows-7">
                <input
                    value={dogname}
                    name="dogname"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Dog name"
                    className="inputfield"
                />
                {/* TODO:select only 1 and change values based off what is selected */}
                <div className="p-4 grid grid-cols-2">
                    <div>
                      <input value={doggender} type="checkbox" id="male" name="male" onChange={handleInputChange} />
                      <label htmlFor="male"> Male</label>
                    </div>
                    <div>
                    <input value={doggender} type="checkbox" id="female" name="female" onChange={handleInputChange} />
                    <label htmlFor="female"> Female</label>
                    </div>
                    

                </div>
                <input
                    value={dogage}
                    name="dogage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="How old is your dog?"
                    className="inputfield"
                />
                {/* TODO:assigned values */}
                <input
                    value={dogbreed}
                    name="dogbreed"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What is your dogs breed"
                    className="inputfield"
                />
                {/* TODO: Combobox */}
                <input
                    value={dogpersonality}
                    name="dogpersonality"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="How does your dog act"
                    className="inputfield"
                />
                
                <div className="grid grid-rows-1">
                    <label htmlFor="snipsnip"> Are they neutered/spayed?</label>
                    <input
                        value={snipsnip}
                        name="snipsnip"
                        onChange={handleInputChange}
                        type="checkbox"

                    />
                </div>
                
                <div className="grid grid-rows-1">
                    <label htmlFor="vaccinated"> Are they vaccinated?</label>
                    <input
                        value={vaccinated}
                        name="vaccinated"
                        onChange={handleInputChange}
                        type="checkbox"

                    />
                </div>
                <button type="button" onClick={handleFormSubmit} className="adddogbtn">
            Submit
          </button>
            </div>
            <div>
                {/* cloudinary photo goes here */}
                <p>cloudinary photo goes here</p>
            </div>
        </form>
          
      </div>
    );
  }
  
  
  export default Addpooch