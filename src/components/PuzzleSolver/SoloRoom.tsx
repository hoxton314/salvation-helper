import { FC } from "react"
import { SoloRoomContainer } from "./PuzzleSolver.styles"
import { observer } from "mobx-react"

export const SoloRoom: FC = observer(() => {
  return (
    <SoloRoomContainer>
      <h2>Solo Room</h2>
      <h3>
        Choose the symbol for YOUR STATUE and the two symbols you see on the
        wall at the back of the room
      </h3>
    </SoloRoomContainer>
  )
})
