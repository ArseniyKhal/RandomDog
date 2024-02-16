import { styled } from 'styled-components'

export const Main = styled.main``
export const MainContent = styled.div`
  height: 100vh;
  background-color: rgb(166, 224, 166);
`
export const DogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  padding: 10px;
`
