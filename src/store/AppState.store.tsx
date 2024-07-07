import { action, makeAutoObservable } from "mobx"

export class AppStateStore {
  rootStore
  selectedTheme = "dark"

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
}
