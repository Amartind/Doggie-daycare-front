import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllOwners } from "../../utils/API";
import MyDoggies from '../mydoggies';
import './style.css'



function Profile(props) {
  const params = useParams();
  const [user, setUser] = useState({});
  const [isMyPage, setIsMyPage] = useState(false);
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const fetchUser = () => {
    getAllOwners(params.id).then((data) => {
      setUser(data);
      console.log(data)
      console.log(props.userId);
      if (props.userId == params.id) {
        setIsMyPage(true);
      } else {
        setIsMyPage(false);
      }
    })
  }
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'username') {
      return setUserName(value)
    } else if (name === 'password') {
      return setPassword(value)
    } else if (name === 'fullname') {
      return setFullName(value)
    } else if (name === 'email') {
      return setEmail(value)
    } else if (name === 'phonenumber') {
      return setPhoneNumber(value)
    } else if (name === 'address') {
      return setAddress(value)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  useEffect(() => {
    fetchUser();
  }, [props.userId, params.id]);

  return (
    <div className="container">
      <p>Welcome {fullname}</p>
      <form className="signupform grid gap-4 grid-cols-1 grid-rows-6">
        <input
          value={fullname}
          name="fullname"
          onChange={handleInputChange}
          type="text"
          placeholder={user.name}
          className="inputfield"
        />
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder={user.username}
          className="inputfield"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder={user.email}
          className="inputfield"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder={user.password}
          className="inputfield"
        />
        <input
          value={phonenumber}
          name="phonenumber"
          onChange={handleInputChange}
          type="text"
          placeholder={user.phonenumber}
          className="inputfield"
        />
        <input
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder={user.address}
          className="inputfield"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );

  const Profile = (props) => {
    const { name, age, breed, gender, personality, snipsnip, vaccinated, dogs } = props;

    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Gender: {gender}</p>
        <p>Personality: {personality}</p>
        <p>SnipSnip: {snipsnip}</p>
        <p>Vaccinated: {vaccinated}</p>

        <MyDoggies dogs={dogs} />
      </div>
    );
  };
}

export default Profile;