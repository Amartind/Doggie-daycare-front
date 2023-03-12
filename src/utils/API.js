const URL_PREFIX = "https://doggiedates.herokuapp.com/";

const API = {
    getAllPets: () => {
        return fetch(`${URL_PREFIX}/api/pets`).then((res) => res.json());
    },
    getAllOwners: (id) => {
        return fetch(`${URL_PREFIX}/api/owners/${id}`).then((res) => res.json());
    },
    isValidToken: (token) => {
        return fetch(`${URL_PREFIX}/api/owners/isValidToken`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    },
    login: (ownerObj) => {
        return fetch(`${URL_PREFIX}/api/owner/login`, {
            method: "POST",
            body: JSON.stringify(ownerObj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    },
    signup: (ownerObj) => {
        return fetch(`${URL_PREFIX}/api/owner`, {
            method: "POST",
            body: JSON.stringify(ownerObj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    },
    addapet: (petObj, token) => {
        return fetch(`${URL_PREFIX}/api/pets`, {
            method: "POST",
            body: JSON.stringify(petObj),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    },
    deletepet: (petId, token) => {
        return fetch(`${URL_PREFIX}/api/pets/${petId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    },
    editOwner: (ownerObj, ownerId, token) => {
        return fetch(`${URL_PREFIX}/api/owner/${ownerId}`, {
            method: "PUT",
            body: JSON.stringify(ownerObj),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    },
};

export default API;
