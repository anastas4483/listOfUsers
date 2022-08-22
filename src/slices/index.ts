import { createSlice } from "@reduxjs/toolkit"
import { Actions } from "../utils/enums"
import { User } from "../utils/types"

interface InitialStateProp {
  allUsers: User[]
  action: Actions | ""
  filterUsers: User[]
}

const initialState: InitialStateProp = {
  allUsers: [],
  action: "",
  filterUsers: [],
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload
    },
    setFilterUsers: (state, action) => {
      state.filterUsers = state.allUsers.filter((user) =>
        user.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      )
    },
    updateFilterUserWithAllUsers: (state) => {
      state.filterUsers = state.allUsers
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

export const {
  setAllUsers,
  setAction,
  addUser,
  deleteUser,
  setFilterUsers,
  updateFilterUserWithAllUsers,
} = userSlice.actions
export default userSlice.reducer
