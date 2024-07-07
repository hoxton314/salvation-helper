import { styled } from "styled-components"
import { BlurBox } from "../styles/generic.styles"

export const StatuesContainer = styled(BlurBox)`
  grid-column: 1;
  grid-row: 2;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 2;
  }
`

export const DissectionRoomContainer = styled(BlurBox)`
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 3;
  }
`

export const SoloRoomContainer = styled(BlurBox)`
  grid-column: 3;
  grid-row: 2;

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 4;
  }
`
