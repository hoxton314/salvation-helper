import { FC } from "react"
import {
  DissectionRoomContainer,
  SoloRoomContainer,
  StatuesContainer,
} from "./PuzzleSolver.styles"

export const PuzzleSolver: FC = () => {
  return (
    <>
      <StatuesContainer>Statues</StatuesContainer>
      <DissectionRoomContainer>Dissection Room</DissectionRoomContainer>
      <SoloRoomContainer>Solo Room</SoloRoomContainer>
    </>
  )
}
