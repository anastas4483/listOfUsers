import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilterUsers } from "../../slices"
import { allUsersSelector, filterSelector } from "../../slices/selectors"
import { Input } from "./FilterInput.styled"

export const FilterInput = () => {
  const dispatch = useDispatch()
  const onChangeFilter = (value: string) => {
    dispatch(setFilterUsers(value))
  }
  return (
    <Input
      onChange={(e) => onChangeFilter(e.target.value)}
      placeholder="filter by name"
    />
  )
}
