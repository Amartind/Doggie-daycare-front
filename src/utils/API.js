const URL_PREFIX = "https://doggiedates.herokuapp.com";


const getAllPets = function () {
    return fetch(`${URL_PREFIX}/api/pets`).then((res) => res.json());
}

const getAllOwners = function (id) {
    return fetch(`${URL_PREFIX}/api/owners/${id}`).then((res) => res.json());
}

const isValidToken = function (token) {
    return fetch(`${URL_PREFIX}/api/owners/isValidToken`, {
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const login = function (ownerObj) {
    return fetch(`${URL_PREFIX}/api/owners/login`, {
        method: "POST",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json());
}

const signup = function (ownerObj) {
    return fetch(`${URL_PREFIX}/api/owners`, {
        method: "POST",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

const addapet = function (petObj, token) {
    return fetch(`${URL_PREFIX}/api/pets`, {
        method: "POST",
        body: JSON.stringify(petObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const deletepet = function (petId, token) {
    return fetch(`${URL_PREFIX}/api/pets/${petId}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const editOwner = function (ownerObj, ownerId, token) {
    return fetch(`${URL_PREFIX}/api/owner/${ownerId}`, {
        method: "PUT",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const getAllMeetups = function(token) {
    return fetch(`${URL_PREFIX}/api/meetups/`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const getMeetupById = function(id, token) {
    return fetch(`${URL_PREFIX}/api/meetups/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

const searchByRadius = function (username, radius) {
    return fetch(`${URL_PREFIX}/api/meetups/${username}/${radius}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

module.exports = {
    getAllPets,
    getAllOwners,
    login,
    isValidToken,
    signup,
    addapet,
    deletepet,
    editOwner,
    searchByRadius,
    getAllMeetups,
    getMeetupById
}
