import axios from 'axios';
const TUITS_API = "http://localhost:4000/api/org";
//const TUITS_API = 'https://a8-server.herokuapp.com/api/tuits';
//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/comments`;


export const createTuit = async (tuit) => {
 const response = await axios.post(TUITS_API, tuit)
 return response.data;
}
 //const response = await axios.get(`${USERS_API}/userID/${userID}`)

export const findAllTuits = async () => {
 const response = await axios.get(TUITS_API);
 const tuits = response.data;
 return tuits;
}


export const deleteTuit = async (_id) => {
 const response = await axios.delete(`${TUITS_API}/${_id}`);
 return response.data;
}





