import React, {useEffect, useRef, useState} from 'react';
import * as service from "../services/user-service"
//is this already in mongoose? I think so???

//get rid of stringify for final version
//change how this looks
const UserList = () => {
  const userEmailRef = useRef()
  const userPassRef = useRef()
  const userFirstRef = useRef()
  const userLastRef = useRef()
  const userPhoneRef = useRef()



  const [users, setUsers] = useState([])
  const findAllUsers = async () => {
    const users = await service.findAllUsers();
    setUsers(users)
  }
  const deleteUser = async (userId) => {
    const status = await service.deleteUser(userId)
    const newUsers = users.filter(user => user._id !== userId)
    setUsers(newUsers)
  }
  const createUser = async () => {
    const newUser = {
      email: userEmailRef.current.value,
      password: userPassRef.current.value,
      firstName: userFirstRef.current.value,
      lastName: userLastRef.current.value,
      phone: userPhoneRef.current.value


    }
    const insertedUser = await service.createUser(newUser)
    const newUsers = [
      ...users,
      insertedUser
    ]
    setUsers(newUsers)
  }
  useEffect(() => {
    findAllUsers()
  }, [])
  return (
    <div>
      <h1>Register</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={() => createUser()}
            className="float-end btn btn-primary">Create</button>
          <input ref={userEmailRef} className="form-control w-75" placeholder = "email"/>
          <input ref={userPassRef} className="form-control w-75 " placeholder = "password"/>
          <input ref={userFirstRef} className="form-control w-75" placeholder = "first name"/>
          <input ref={userLastRef} className="form-control w-75" placeholder = "last name"/>
          <input ref={userPhoneRef} className="form-control w-75" placeholder = "phone number"/>
        </li>
        {
          users.map(user =>
          <li key={user._id} className="list-group-item">
            <span
              onClick={() => deleteUser(user._id)}
              className="float-end">&times;</span>
            {user.email}
          </li>
          )
        }
      </ul>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default UserList;