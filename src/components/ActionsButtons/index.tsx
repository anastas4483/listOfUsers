import React from "react"
import { useDispatch } from "react-redux"
import { setAction } from "../../slices"
import { Button } from "../../ui/Button"
import { Actions } from "../../utils/enums"
import { ButtonWrapper } from "./ActionButtons.styled"

export const ActionButtons = () => {
  const dispatch = useDispatch()

  const onAddUser = () => {
    dispatch(setAction(Actions.add))
  }
  const onDeleteUser = () => {
    dispatch(setAction(Actions.delete))
  }
  return (
    <ButtonWrapper>
      <Button color="green" onClick={onAddUser}>
        Add
      </Button>
      <Button color="red" onClick={onDeleteUser}>
        Remove
      </Button>
    </ButtonWrapper>
  )
}
