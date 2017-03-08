import { baseURL } from '../constants/';

export function login(data) {
    console.log(data)
    return fetch(`${baseURL}/api/v1/account`, {
        method: 'GET', headers: {
            'Authorization': 'Basic ' + btoa(`${data.data.email}:${data.data.password}`),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
}