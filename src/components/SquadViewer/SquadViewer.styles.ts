import { styled } from "styled-components"
import { BlurBox } from "../../styles/generic.styles"

export const Container = styled(BlurBox)`
  grid-column: 1/4;
  grid-row: 1;

  width: 100%;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    font-size: 32px;
    margin: 0;
  }

  @media (max-width: 1440px) {
    grid-column: 1;
    grid-row: 1;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 250px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.quaternary};
  color: ${({ theme }) => theme.text};
`

export const FireteamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding: 16px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const GuardianContainer = styled.div<{ $classId: number | string }>`
  overflow: hidden;
  border: 2px solid ${({ theme, $classId }) => theme.classColors[$classId]};
  border-radius: 8px;
  /* aspect-ratio: 3 / 1; */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
`

export const GuardianBanner = styled.div<{ $emblem_path: string }>`
  grid-column: 1/7;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ $emblem_path }) => $emblem_path});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100%;
  width: 100%;
`

export const GuardianName = styled.div`
  grid-column: 2 / 6;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.buttonTextColor};
  padding-left: 8px;
  overflow: hidden;

  height: 100%;
  width: 100%;

  h2 {
    font-size: 28px;
    margin: 0;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }
`

export const GuardianClassIcon = styled.div<{ $classId: number | string }>`
  grid-column: 6;
  grid-row: 1;
  object-fit: contain;
  height: 100%;
  width: 100%;
  padding: 8px;
  color: ${({ theme, $classId }) => theme.classColors[$classId]};

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ItemIcon = styled.img`
  grid-row: 2;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  width: 100%;
`
