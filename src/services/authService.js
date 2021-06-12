import axios from 'axios';

const url = process.env.REACT_APP_API_URL

export const register = (userDetails) => {
    return axios.post(`${url}/register`, { userDetails })
        .then((response) => response);
}

export const login = (userDetails) => {
    return axios.post(`${url}/signin`, { userDetails })
        .then((response) => response);
}
