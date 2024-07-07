export interface Theme {
  text: string
  buttonTextColor: string
  primary: string
  secondary: string
  tertiary: string
  quaternary: string
  quinary: string

  classColors: {
    0: string
    1: string
    2: string
    titan: string
    hunter: string
    warlock: string
  }

  shapes: {
    default: string
    active: string
    disabled: string
  }
}
