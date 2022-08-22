import React from "react"
import { useSelector } from "react-redux"
import { allUsersSelector, filterSelector } from "../../slices/selectors"
import { User } from "../../utils/types"
import UserItem from "../../ui/UserCard"
import { WrapperList } from "./UserList.styled"

export const UsersList = () => {
  const users: User[] = useSelector(filterSelector)

  return (
    <WrapperList>
      {users?.length &&
        users.map((user: any) => <UserItem key={user.id} user={user} />)}
    </WrapperList>
  )
}
