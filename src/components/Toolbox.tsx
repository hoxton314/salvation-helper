import { observer } from "mobx-react"
import { FC, useContext } from "react"
import styled from "styled-components"
import { StoreContext } from "../App"

const FloatingWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  background-color: #161616;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 0 8px 0 #000;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Toolbox: FC = observer(() => {
  const store = useContext(StoreContext)
  const { selectedTheme } = store.AppState

  return (
    <FloatingWrapper>
      <div
        onClick={() => {
          console.log("Theme toggled")
          store.AppState.toggleTheme()
        }}
      >
        Theme
      </div>
    </FloatingWrapper>
  )
})
