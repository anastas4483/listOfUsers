import { render } from "@testing-library/react"
import React, { Component, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "../../slices"
import { HelloTitle, RootContainer } from "./HomePage.styled"
import { UsersList } from "../../components/UserList"
import { ActionButtons } from "../../components/ActionsButtons"
import { actionSelector } from "../../slices/selectors"
import { Actions } from "../../utils/enums"
import { Modal } from "../../ui/Modal"

export const HomePage = () => {
  const action = useSelector(actionSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    const weatherURL = "https://jsonplaceholder.typicode.com/users"
    fetch(weatherURL)
      .then((res) => res.json())
      .then((res) => dispatch(setUsers(res)))
  }, [])

  return (
    <RootContainer>
      <HelloTitle>
        Hello, there are users which you can delete and add to this list
        <ActionButtons />
        <UsersList />
      </HelloTitle>
      {action === Actions.add && <Modal />}
    </RootContainer>
  )
}
