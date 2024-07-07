import { createContext, FC, useContext, useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "./styles/global.styles"
import { rootStore } from "./store/Root.store"
import { SquadViewer } from "./components/SquadViewer/SquadViewer"
import { PuzzleSolver } from "./components/PuzzleSolver"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./theme/light"
import { darkTheme } from "./theme/dark"
import backgroundImg from "./assets/background.jpg"
import { Theme } from "./theme/theme"
import { Toolbox } from "./components/Toolbox"
import { observer } from "mobx-react"

const handleTheme = (theme: string): Theme => {
  switch (theme) {
    case "dark":
      return darkTheme
    case "light":
      return lightTheme
    default:
      return lightTheme
  }
}

const AppWrapper = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: #161616;
  min-height: 100vh;

  @media (max-width: 1024px) {
    gap: 16px;
    padding: 16px;
    background-size: cover;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`

export const StoreContext = createContext(rootStore)

const App: FC = observer(() => {
  const store = useContext(StoreContext)
  const { selectedTheme } = store.AppState

  useEffect(() => {
    store.AppState.initTheme()
  }, [])

  return (
    <StoreContext.Provider value={rootStore}>
      <Helmet
        title="SE Helper"
        description="Salvation's edge helper"
        themeColor="#000000"
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={handleTheme(selectedTheme)}>
        <GlobalStyle />
        <AppWrapper>
          <SquadViewer />
          <PuzzleSolver />
        </AppWrapper>

        <Toolbox />
      </ThemeProvider>
    </StoreContext.Provider>
  )
})

export default App
