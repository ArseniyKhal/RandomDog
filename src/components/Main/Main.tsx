import { Card } from '../Card/Card'
import { useSelector } from 'react-redux'
import { dogsSelector } from '../../store/selectors/dogsSelectors'
import { Container } from '../../App.styles'
import { DogType } from '../../App'
import * as S from './Main.styles'

export const Main = () => {
  const dogsList = useSelector(dogsSelector)

  const dogsLitFoRender = dogsList?.map((el: DogType) => (
    <Card key={el.id} dataCard={el} />
  ))
  return (
    <S.Main>
      <Container>
        <S.DogList>{dogsLitFoRender}</S.DogList>
      </Container>
    </S.Main>
  )
}
