import { Card } from '../Card/Card'
import { useSelector } from 'react-redux'
import { dogsSelector } from '../../store/selectors/dogsSelectors'
import { Container } from '../../App.styles'
import { DogType } from '../../App'
import { useState } from 'react'
import * as S from './Main.styles'

export const Main = () => {
  const [isFilter, setFilter] = useState(false)
  let dogsList = useSelector(dogsSelector)

  if (isFilter) {
    dogsList = dogsList?.filter((el: DogType) => el.isLike === true)
  }

  const dogsLitFoRender = dogsList?.map((el: DogType) => (
    <Card key={el.id} dataCard={el} />
  ))

  return (
    <S.Main>
      <Container>
        <S.MainContent>
          <S.FilterButton
            onClick={() => {
              setFilter(!isFilter)
            }}
          >
            показать {isFilter ? 'все' : 'избранное'}
          </S.FilterButton>
          <S.DogList>{dogsLitFoRender}</S.DogList>
        </S.MainContent>
      </Container>
    </S.Main>
  )
}
