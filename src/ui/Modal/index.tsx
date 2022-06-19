import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, setAction } from "../../slices"
import { usersSelector } from "../../slices/selectors"
import { Button } from "../Button"
import { ModalTitle, ModalWrapper } from "./Modal.styled"

export const Modal = () => {
  const dispatch = useDispatch()
  const newId = useSelector(usersSelector).length
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    const newUser = {
      name,
      phone,
      email,
      id: newId + 1,
    }
    dispatch(addUser(newUser))
    dispatch(setAction(""))
  }

  const onClose = () => {
    dispatch(setAction(""))
  }
  return (
    <ModalWrapper>
      <ModalTitle>Add info of new user</ModalTitle>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Button color="#0e1b97" onClick={onSubmit}>
        Done
      </Button>
      <Button color="red" onClick={onClose}>
        Close
      </Button>
    </ModalWrapper>
  )
}
