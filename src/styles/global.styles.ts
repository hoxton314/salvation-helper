import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;

  * {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
  }

  ol, ul {
    list-style: none;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  a {
    color: inherit;
    cursor: pointer;

    &:hover {
      cursor: pointer;
    }
  }

}
`
