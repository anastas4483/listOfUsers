import styled from "styled-components"

export const RootButton = styled.button`
  border-radius: 5px;
  border: 2px solid ${({ color }) => color || "#ccc"};
  cursor: pointer;
`
