const URL_PREFIX = "https://doggiedates.herokuapp.com";


export const getAllPets = function () {
    return fetch(`${URL_PREFIX}/api/pets`).then((res) => res.json());
}

export const getAllOwners = function (id) {
    return fetch(`${URL_PREFIX}/api/owners/${id}`).then((res) => res.json());
}

export const makeAMeetup = function (meetupObj, token) {
    return fetch(`${URL_PREFIX}/api/meetups/`, {
        method: "POST",
        body: JSON.stringify(meetupObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const editaMeetup = function (meetupObj, meetupid, token) {
    return fetch(`${URL_PREFIX}/api/meetups/${meetupid}`, {
        method: "PUT",
        body: JSON.stringify(meetupObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const deleteAMeetup = function (meetupid,token) {
    return fetch(`${URL_PREFIX}/api/meetups/${meetupid}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}


export const isValidToken = function (token) {
    return fetch(`${URL_PREFIX}/api/owners/isValidToken`, {
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const login = function (ownerObj) {
    return fetch(`${URL_PREFIX}/api/owners/login`, {
        method: "POST",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json());
}

export const signup = function (ownerObj) {
    return fetch(`${URL_PREFIX}/api/owners`, {
        method: "POST",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

export const addapet = function (petObj, token) {
    return fetch(`${URL_PREFIX}/api/pets`, {
        method: "POST",
        body: JSON.stringify(petObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const deletepet = function (petId, token) {
    return fetch(`${URL_PREFIX}/api/pets/${petId}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const editOwner = function (ownerObj, ownerId, token) {
    return fetch(`${URL_PREFIX}/api/owner/${ownerId}`, {
        method: "PUT",
        body: JSON.stringify(ownerObj),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const getAllMeetups = function(token) {
    return fetch(`${URL_PREFIX}/api/meetups/`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const getMeetupById = function(id, token) {
    return fetch(`${URL_PREFIX}/api/meetups/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export const searchByRadius = async function (radius, token) {
    return await fetch(`${URL_PREFIX}/api/meetups/search/${radius}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

// export default {
//     getAllPets,
//     getAllOwners,
//     login,
//     isValidToken,
//     signup,
//     addapet,
//     deletepet,
//     editOwner,
//     getAllMeetups,
//     makeAMeetup,
//     editaMeetup,
//     deleteAMeetup,
//     searchByRadius,
//     getMeetupById
// }
