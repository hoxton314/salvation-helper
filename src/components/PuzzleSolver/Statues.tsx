import { FC, useContext, useState } from "react"
import {
  Inputwrap,
  LayoutInput,
  ShapeGrid,
  StatueContainer,
  StatueGrid,
  StatuesContainer,
  StatueTitle,
} from "./PuzzleSolver.styles"
import { observer } from "mobx-react"
import { PlaneShape } from "./PlaneShape"
import { StoreContext } from "../../App"
import { getShapeState } from "./methods"
import { Button } from "../../styles/generic.styles"
import { StatueIcon } from "../StatueIcon"

export const Statues: FC = observer(() => {
  const store = useContext(StoreContext)
  const { shapeLayout, allowedChars } = store.AppState

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const newChar = val.charAt(val.length - 1)

    if (val.length < shapeLayout.length && shapeLayout.length > 1) {
      store.AppState.setShapeLayout(val[0])
      return
    } else if (val.length < shapeLayout.length) {
      store.AppState.setShapeLayout(val)
      return
    }

    console.log(allowedChars, newChar)

    if (!allowedChars.includes(newChar)) {
      return
    }

    store.AppState.setShapeLayout(val)
  }

  return (
    <StatuesContainer>
      <h2>Statues</h2>
      <h3>Note the layout of the statues in solo room</h3>
      <Inputwrap>
        <LayoutInput
          value={shapeLayout.toUpperCase()}
          onChange={handleInputChange}
          maxLength={3}
        />
        <Button onClick={() => store.AppState.setShapeLayout("")}>Clear</Button>
      </Inputwrap>

      <StatueGrid>
        <StatueContainer>
          <StatueTitle>Left (1)</StatueTitle>
          <ShapeGrid>
            <PlaneShape shape="c" state={getShapeState("c", 1, shapeLayout)} />
            <PlaneShape shape="t" state={getShapeState("t", 1, shapeLayout)} />
            <PlaneShape shape="s" state={getShapeState("s", 1, shapeLayout)} />
          </ShapeGrid>
          <StatueIcon />
        </StatueContainer>
        <StatueContainer>
          <StatueTitle>Middle (2)</StatueTitle>
          <ShapeGrid>
            <PlaneShape shape="c" state={getShapeState("c", 2, shapeLayout)} />
            <PlaneShape shape="t" state={getShapeState("t", 2, shapeLayout)} />
            <PlaneShape shape="s" state={getShapeState("s", 2, shapeLayout)} />
          </ShapeGrid>
          <StatueIcon />
        </StatueContainer>
        <StatueContainer>
          <StatueTitle>Right (3)</StatueTitle>
          <ShapeGrid>
            <PlaneShape shape="c" state={getShapeState("c", 3, shapeLayout)} />
            <PlaneShape shape="t" state={getShapeState("t", 3, shapeLayout)} />
            <PlaneShape shape="s" state={getShapeState("s", 3, shapeLayout)} />
          </ShapeGrid>
          <StatueIcon />
        </StatueContainer>
      </StatueGrid>
    </StatuesContainer>
  )
})
