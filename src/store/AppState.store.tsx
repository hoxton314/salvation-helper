import { action, makeAutoObservable } from "mobx"

type StereometricShape =
  | "tt"
  | "tc"
  | "ts"
  | "ct"
  | "cc"
  | "cs"
  | "st"
  | "sc"
  | "ss"

export class AppStateStore {
  rootStore
  selectedTheme = "dark"

  allowedChars = ["t", "c", "s"]
  shapeLayout: string = ""

  stereometricShapesLayout: Array<StereometricShape> = []

  constructor(rootStore) {
    makeAutoObservable(this)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.rootStore = rootStore
  }

  @action.bound initTheme() {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      this.selectedTheme = storedTheme
    } else {
      this.selectedTheme = "dark"
    }
  }

  @action.bound setSelectTheme(theme: string) {
    localStorage.setItem("theme", theme)
    this.selectedTheme = theme
  }

  @action.bound toggleTheme() {
    const themeToSet = this.selectedTheme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", themeToSet)
    this.selectedTheme = themeToSet
  }

  @action.bound setShapeLayout(layout: string) {
    if (layout.length === 2) {
      const newChar = layout.charAt(layout.length - 1)

      const thirdChar = this.allowedChars.find(
        (char) => char !== newChar && char !== this.shapeLayout.charAt(0),
      )

      this.shapeLayout = layout.toLowerCase() + thirdChar
    } else {
      this.shapeLayout = layout.toLowerCase()
    }
  }

  @action.bound setStereometricShapesLayout(layout: Array<StereometricShape>) {
    if (layout.length === 2) {
      if (layout[0] === "ss" && layout[1] === "cc") {
        this.stereometricShapesLayout = [...layout, "tt"]
        return
      }

      if (layout[0] === "ss" && layout[1] === "tt") {
        this.stereometricShapesLayout = [...layout, "cc"]
        return
      }

      if (layout[0] === "ss" && layout[1] === "ts") {
        this.stereometricShapesLayout = [...layout, "ts"]
        return
      }
    } else {
      this.stereometricShapesLayout = layout
    }
  }
}
