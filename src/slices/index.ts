import { createSlice } from "@reduxjs/toolkit"
import { Actions } from "../utils/enums"
import { User } from "../utils/types"

interface InitialStateProp {
  allUsers: User[]
  action: Actions | ""
}

const initialState: InitialStateProp = {
  allUsers: [],
  action: "",
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.allUsers = action.payload
    },
    setAction: (state, action) => {
      state.action = action.payload
    },
    addUser: (state, action) => {
      state.allUsers.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload
      )
    },
  },
})

export const { setUsers, setAction, addUser, deleteUser } = userSlice.actions
export default userSlice.reducer
