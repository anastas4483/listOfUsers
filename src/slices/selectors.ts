import { createSelector } from "@reduxjs/toolkit"

const allUsers = (state: any) => state.users.allUsers
const filter = (state: any) => state.users.filterUsers
const action = (state: any) => state.users.action
export const allUsersSelector = createSelector(
  [allUsers],
  (allUsers) => allUsers
)
export const filterSelector = createSelector([filter], (filter) => filter)
export const actionSelector = createSelector([action], (action) => action)
