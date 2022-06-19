import React from "react"
import { useSelector } from "react-redux"
import { usersSelector } from "../../slices/selectors"
import { User } from "../../utils/types"
import UserItem from "../../ui/UserCard"
import { WrapperList } from "./UserList.styled"

export const UsersList = () => {
  const users: User[] = useSelector(usersSelector)

  return (
    <WrapperList>
      {users.length &&
        users.map((user: any) => <UserItem key={user.id} user={user} />)}
    </WrapperList>
  )
}
