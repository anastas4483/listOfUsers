import { createSlice } from "@reduxjs/toolkit"
import { Actions } from "../utils/enums"
import { User } from "../utils/types"

interface InitialStateProp {
  allUsers: User[]
  newUser: User | null
  action: Actions | ""
}

const initialState: InitialStateProp = {
  allUsers: [],
  newUser: null,
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
      state.action = action.payload.action
      if (action.payload.action === Actions.add && action.payload.newUser)
        state.newUser = action.payload.newUser
    },
  },
})

export const { setUsers, setAction } = userSlice.actions
export default userSlice.reducer
