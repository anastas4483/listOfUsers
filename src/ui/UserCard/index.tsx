import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../../slices"
import { actionSelector } from "../../slices/selectors"
import { Actions } from "../../utils/enums"
import { User } from "../../utils/types"
import {
  CardHeader,
  CardInfo,
  CardMiddle,
  CardName,
  CardNoPhoto,
  CardWrapper,
  DeleteCross,
} from "./UserCard.styled"
interface UserItemProp {
  user: User
}
const UserItem = ({ user }: UserItemProp) => {
  const action = useSelector(actionSelector)
  const dispatch = useDispatch()
  const { name, email, phone, id } = user

  const onDeleteUser = () => {
    console.log(id)

    dispatch(deleteUser(id))
  }
  return (
    <CardWrapper>
      {action === Actions.delete && (
        <DeleteCross onClick={onDeleteUser}> x </DeleteCross>
      )}
      <CardHeader>
        <CardNoPhoto src={require("../../assets/nophoto.png")} />
        <CardName>{name}</CardName>
      </CardHeader>
      <CardMiddle>
        <CardInfo>{phone}</CardInfo>
        <CardInfo>{email}</CardInfo>
      </CardMiddle>
    </CardWrapper>
  )
}

export default UserItem
