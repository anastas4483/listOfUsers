import { render } from "@testing-library/react"
import React, { Component, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUsers } from "../../slices"
import { HelloTitle, RootContainer } from "./HomePage.styled"
import { UsersList } from "../../components/UserList"

export const HomePage = () => {
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
        Hello, there are users which you can know better if you click on their
        photos
        <UsersList />
      </HelloTitle>
    </RootContainer>
  )
}
