import { FC } from "react"
import {
  DissectionRoomContainer,
  ShapeGrid,
  StatueContainer,
  StatueGrid,
  StatueTitle,
} from "./PuzzleSolver.styles"
import { observer } from "mobx-react"
import { StatueIcon } from "../StatueIcon"
import { getShapeState } from "./methods"
import { PlaneShape } from "./PlaneShape"

export const DissectionRoom: FC = observer(() => {
  return (
    <DissectionRoomContainer>
      <h2>Dissection Room</h2>
      <h3>Name the 3 geometric shapes you see on the statues</h3>

      <StatueGrid>
        <StatueContainer>
          <StatueTitle>Left (1)</StatueTitle>
          <ShapeGrid></ShapeGrid>
          <StatueIcon />
        </StatueContainer>
        <StatueContainer>
          <StatueTitle>Middle (2)</StatueTitle>
          <ShapeGrid></ShapeGrid>
          <StatueIcon />
        </StatueContainer>
        <StatueContainer>
          <StatueTitle>Right (3)</StatueTitle>
          <ShapeGrid></ShapeGrid>
          <StatueIcon />
        </StatueContainer>
      </StatueGrid>
    </DissectionRoomContainer>
  )
})
