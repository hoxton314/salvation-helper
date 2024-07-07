import { observer } from "mobx-react"
import { FC, useContext } from "react"
import { css, styled } from "styled-components"
import { StoreContext } from "../../App"

const ShapeWrapper = styled.div<{ $active?: boolean; $disabled?: boolean }>`
  width: 32px;
  height: 32px;

  @media (max-width: 1440px) and (min-width: 660px) {
    width: 42px;
    height: 42px;
  }

  transition: color 0.2s;

  color: ${({ theme, $active, $disabled }) => {
    if ($disabled) {
      return theme.shapes.disabled
    }
    if ($active) {
      return theme.shapes.active
    }
    return theme.shapes.default
  }};

  cursor: ${({ $active, $disabled }) =>
    !$disabled && !$active ? "pointer" : "default"};

  ${({ $active, $disabled }) =>
    !$disabled && !$active
      ? css`
          &:hover {
            color: ${({ theme }) => theme.secondary};
          }
        `
      : css``}

  svg {
    width: 100%;
    height: 100%;
  }
`

interface PlaneShapeProps {
  shape: "circle" | "square" | "triangle" | "c" | "s" | "t"
  state: "active" | "disabled" | "default"
}

const getShapeSvg = (shape: PlaneShapeProps["shape"]) => {
  switch (shape) {
    case "circle":
    case "c":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
          ></path>
        </svg>
      )
    case "square":
    case "s":
      return (
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 3h18v18H3z"></path>
        </svg>
      )
    case "triangle":
    case "t":
      return (
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M1 21h22L12 2"></path>
        </svg>
      )
    default:
      return null
  }
}

export const PlaneShape: FC<PlaneShapeProps> = observer(({ shape, state }) => {
  const store = useContext(StoreContext)
  const { shapeLayout } = store.AppState

  const handleLayoutUpdate = () => {
    if (state === "disabled") return

    store.AppState.setShapeLayout(shapeLayout + shape)
  }

  return (
    <ShapeWrapper
      $active={state === "active"}
      $disabled={state === "disabled"}
      onClick={handleLayoutUpdate}
    >
      {getShapeSvg(shape)}
    </ShapeWrapper>
  )
})
