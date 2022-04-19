import axios from "axios";
const USERS_API = "http://localhost:4000/api/favorites"


export const findAllFavorites = async () => {
  const response = await axios.get(USERS_API)
  return response.data
}
export const favoritesByUUID = async (uuid) => {
 console.log(`${USERS_API}/uuid/${uuid}`)
  const response = await axios.get(`${USERS_API}/uuid/${uuid}`)
  console.log(response)
  return response.data
}
export const favoritesByUser = async (username) => {
 console.log(`${USERS_API}/username/${username}`)
  const response = await axios.get(`${USERS_API}/username/${username}`)
  console.log(response)
  return response.data
}


export const createFavorite = async (info) => {
  const response = await axios.post(USERS_API, info)
  return response.data
}

export const deleteFavorite = async (id) => {
  const response = await axios.delete(`${USERS_API}/${id}`)
  return response.data
}