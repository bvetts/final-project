import axios from "axios";
const USERS_API = "http://localhost:4000/api/friends"


export const findAllFriends = async () => {
  const response = await axios.get(USERS_API)
  return response.data
}

export const friendsByUser = async (userID) => {
 //console.log(`${USERS_API}/userID/${userID}`)
  const response = await axios.get(`${USERS_API}/userID/${userID}`)
  //console.log(response)
  return response.data
}


export const createFriend = async (fav) => {
  const response = await axios.post(USERS_API, fav)
  return response.data
}

export const deleteFriend = async (id) => {
  const response = await axios.delete(`${USERS_API}/${id}`)
  return response.data
}