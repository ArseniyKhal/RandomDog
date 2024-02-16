import { styled } from 'styled-components'
import { Button } from '../../App.styles'

export const Main = styled.main``
export const MainContent = styled.div`
  padding: 10px 10px 30px 10px;
`
export const DogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
`
export const FilterButton = styled(Button)`
  border: none;
  font-size: 30px;
  background-color: rgb(56, 138, 56);
  padding: 8px 30px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
`
