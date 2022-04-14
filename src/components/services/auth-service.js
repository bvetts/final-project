import axios from "axios";
const BASE_URL = "http://localhost:4000/api";
const SECURITY_API = `${BASE_URL}/auth`;

const USERS_API = 'http://localhost:4000/api/users'


const api = axios.create({
   withCredentials: true
});

//should already be adding in created user? why cant I see it??
export const signup = (user) =>{
   api.post(`${SECURITY_API}/signup`, user)
       .then(response => response.data);




       }



export const login = (user) =>
   api.post(`${SECURITY_API}/login`, user)
       .then(response => response.data);

export const logout = (user) =>
   api.post(`${SECURITY_API}/logout`, user)
       .then(response => response.data);

export const profile = () =>
   api.post(`${SECURITY_API}/profile`)
       .then(response => response.data);