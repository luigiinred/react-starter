import { baseURL } from '../constants/';
var axios = require('axios');




export function login(data) {
    const axiosConfig = { auth: { username: data.data.email, password: data.data.password } };
    return axios.get(`${baseURL}/api/v1/account`, axiosConfig).then(
        (data) => {
            return {
                axiosConfig: axiosConfig, data: data
            }
        });
}