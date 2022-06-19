import styled from "styled-components"

export const CardWrapper = styled.div`
  width: 350px;
  max-height: 200px;
  min-height: 150px;
  background-color: #9fa8da94;
  border-radius: 5px;
  box-shadow: 1px 3px 0px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 20px;
  position: relative;
`
export const CardName = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #1f1f1f;
`
export const CardNoPhoto = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardMiddle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`
export const CardInfo = styled.span`
  font-size: 20px;
  color: #303f9f;
`
export const DeleteCross = styled.button`
  position: absolute;
  right: 21px;
  top: 5px;
  font-size: 22px;
  font-family: monospace;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`
