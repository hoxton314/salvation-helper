import { styled } from "styled-components"

export const BlurBox = styled.div`
  border: 2px solid ${({ theme }) => theme.quinary};
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => `${theme.tertiary}50`};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonTextColor};

  padding: 8px 16px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`
