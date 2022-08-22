import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setAllUsers,
  setFilterUsers,
  updateFilterUserWithAllUsers,
} from "../../slices"
import { HelloTitle, RootContainer } from "./HomePage.styled"
import { UsersList } from "../../components/UserList"
import { ActionButtons } from "../../components/ActionsButtons"
import { actionSelector, allUsersSelector } from "../../slices/selectors"
import { Actions } from "../../utils/enums"
import { Modal } from "../../ui/Modal"
import { FilterInput } from "../../components/FilterInput"

export const HomePage = () => {
  const action = useSelector(actionSelector)
  const allUsers = useSelector(allUsersSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    const weatherURL = "https://jsonplaceholder.typicode.com/users"
    fetch(weatherURL)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAllUsers(res))
        dispatch(updateFilterUserWithAllUsers())
      })
  }, [])

  useEffect(() => {
    dispatch(updateFilterUserWithAllUsers())
  }, [allUsers])
  return (
    <RootContainer>
      <HelloTitle>
        Hello, there are users which you can delete and add to this list
      </HelloTitle>
      <ActionButtons />
      <FilterInput />
      <UsersList />

      {action === Actions.add && <Modal />}
    </RootContainer>
  )
}
