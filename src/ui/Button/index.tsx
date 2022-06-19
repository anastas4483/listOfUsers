import React from "react"
import { RootButton } from "./button.styled"

interface ButtonProp {
  color?: string
  onClick: () => void
  children: string
}

export const Button = ({ color, onClick, children }: ButtonProp) => {
  return (
    <RootButton color={color} onClick={onClick}>
      {children}
    </RootButton>
  )
}
