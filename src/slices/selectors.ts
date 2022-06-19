import { createSelector } from "@reduxjs/toolkit"

const allUsers = (state: any) => state.users.allUsers
const action = (state: any) => state.users.action
export const usersSelector = createSelector([allUsers], (allUsers) => allUsers)
export const actionSelector = createSelector([action], (action) => action)
