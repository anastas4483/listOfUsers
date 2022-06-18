import React from "react"
import { User } from "../../utils/types"
interface UserItemProp {
  user: User
}
const UserItem = ({ user }: UserItemProp) => {
  const { name, id, email, phone } = user
  console.log(name)

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default UserItem
