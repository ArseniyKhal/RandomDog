import { useDispatch, useSelector } from 'react-redux'
import { useGetDogQuery } from './services/servicesApi'
import { addDogList } from './store/actions/creators/dogsCreator'
import { useEffect } from 'react'
import { dogsSelector } from './store/selectors/dogsSelectors'
import { Card } from './components/Card/Card'
import * as S from './App.styles'

export interface DogType {
  id: string
  urlImg: string
  breed: string
  isLike: boolean
}

function App() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetDogQuery(7)
  const dogsList = useSelector(dogsSelector)

  useEffect(() => {
    if (data?.status === 'success') {
      const dogsOfStore: DogType[] = data.message.map((el: string) => {
        return {
          id: 'id' + Math.random().toString(24).slice(2),
          urlImg: el,
          breed: el.split('breeds/')[1].split('/')[0],
          isLike: false,
        }
      })
      dispatch(addDogList(dogsOfStore))
    }
  }, [data])

  const dogsLitFoRender = dogsList?.map((el: DogType) => (
    <Card key={el.id} dataCard={el} />
  ))

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Header>
          <S.Container>
            <S.HeaderTitle>
              {isLoading ? 'Ищем..' : 'Немного картинок пёсиков'}
            </S.HeaderTitle>
          </S.Container>
        </S.Header>
        <S.Main>
          <S.Container>
            <S.DogList>{dogsLitFoRender}</S.DogList>
          </S.Container>
        </S.Main>
      </S.Wrapper>
    </>
  )
}

export default App
