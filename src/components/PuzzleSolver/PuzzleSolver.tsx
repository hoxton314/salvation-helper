import { FC } from "react"
import { Statues } from "./Statues"
import { DissectionRoom } from "./DissectionRoom"
import { SoloRoom } from "./SoloRoom"

export const PuzzleSolver: FC = () => {
  return (
    <>
      <Statues />
      <DissectionRoom />
      <SoloRoom />
    </>
  )
}
