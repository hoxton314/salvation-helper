import { styled } from "styled-components"
import { BlurBox } from "../../styles/generic.styles"

export const StatuesContainer = styled(BlurBox)`
  grid-column: 1;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 2;
  }
`

export const DissectionRoomContainer = styled(BlurBox)`
  grid-column: 2;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 3;
  }
`

export const SoloRoomContainer = styled(BlurBox)`
  grid-column: 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 4;
  }
`

export const LayoutInput = styled.input`
  padding: 0 0 0 8px;
  font-size: 16px;
  width: 100px;
  height: 60px;
  font-size: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.quaternary};
  color: ${({ theme }) => theme.text};
  text-align: center;
  letter-spacing: 8px;
`

export const StatueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`

export const StatueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StatueTitle = styled.h4`
  font-size: 20px;
`

export const ShapeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  & > * {
    justify-self: center;
  }
`

export const Inputwrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  button {
    height: 100%;
    width: 100px;
    font-size: 24px;
  }
`
