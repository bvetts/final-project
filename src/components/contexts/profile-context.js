import React, {useContext, useState} from "react";
import * as service from "../services/auth-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
  const [profile, setProfile] = useState()

  const signin = async (user) => {
    try {
      const p = await service.login(
        user
      )
      setProfile(p)
    } catch (e) {
      throw e
    }
  }

  const checkLoggedIn = async () => {
    try {
      const p = await service.profile()
      setProfile(p)
      return p
    } catch (e) {
      throw e
    }
  }

  const signup = async (user) => {
    try {
      const newUser = await service.signup(
        user
      )
      setProfile(newUser)
    } catch (e) {
      throw e
    }
  }

  const value = {profile, signup, checkLoggedIn, signin}
  return(
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  return useContext(ProfileContext)
}