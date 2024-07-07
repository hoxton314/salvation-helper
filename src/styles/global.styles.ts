import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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


`
