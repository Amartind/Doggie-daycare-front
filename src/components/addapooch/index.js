import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'
import { addapet, getAllOwners } from "../../utils/API";


function Addpooch() {
    const params = useParams();
    const [dogname, setDogName] = useState('');
    const [doggender, setDogGender] = useState('');
    const [dogage, setDogAge] = useState('');
    const [dogbreed, setDogBreed] = useState('');
    const [dogpersonality, setDogPersonality] = useState('');
    const [snipsnip, setSnipSnip] = useState(false);
    const [vaccinated, setVaccinated] = useState(false);
    const [user, setUser] = useState({});
    // const femaleSelector = document.getElementById("female")
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      if (name === 'dogname'){
          return setDogName(value)
      } else if (name === 'doggender'){
        return setDogGender(value)
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
      
    } 
    
   
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      console.log("submitted pet data")
      
      getAllOwners(params.id).then((data) => {
        setUser(data);
      const petObj= {
        name:dogname,
        gender:doggender,
        age:dogage,
        breed:dogbreed,
        personality:dogpersonality,
        spayed_neutered:snipsnip,
        vaccinated:vaccinated
      }
      addapet(petObj,localStorage.getItem("token")).then((data) =>{
        console.log(data)
      })
      
    });
  }
    return (
      <div className="dogcontainer flex flex-col flex-auto">
        <p className="flex justify-center text-lg">Tell Us About Your Dog</p>
        <br/>
        <form className="dogform grid p-2 centerMe grid-cols-2 grid-rows-6">
            <div className="grid gap-4 grid-cols-1 grid-rows-7">
                <input
                    value={dogname}
                    name="dogname"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Dog's Name"
                    className="inputfield"
                    />
                <input 
                    value={doggender} 
                    name="doggender" 
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Male or Female?"
                    className="inputfield"
                    />
                <input
                    value={dogage}
                    name="dogage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Age?"
                    className="inputfield"
                    />
                {/* TODO:assigned values */}
                <input
                    value={dogbreed}
                    name="dogbreed"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Breed"
                    className="inputfield"
                    />
                {/* TODO: Combobox */}
                <input
                    value={dogpersonality}
                    name="dogpersonality"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Personality Quirks"
                    className="inputfield"
                    />
                
                <div className="grid grid-rows-1">
                    <label htmlFor="snipsnip"> I'm neutered/spayed?</label>
                    <input
                        value={snipsnip}
                        name="snipsnip"
                        onChange={handleInputChange}
                        type="checkbox"

                    />
                </div>
                
                <div className="grid grid-rows-1">
                    <label htmlFor="vaccinated"> I'm vaccinated? 💉</label>
                    <input
                        value={vaccinated}
                        name="vaccinated"
                        onChange={handleInputChange}
                        type="checkbox"

                        />
                </div>
                {/* <br/> */}
          {/* <p>cloudinary photo goes here</p>
          <br/> */}
                <button type="button" onClick={handleFormSubmit} className="adddogbtn">
            Submit
          </button>

        </div>
        <div>
         
        </div>
      </form>

    </div>
  );
  
};
  
  
  export default Addpooch