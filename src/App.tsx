import { useDispatch, useSelector } from 'react-redux'
import { useGetDogQuery } from './services/servicesApi'
import { addDogList } from './store/actions/creators/dogsCreator'
import { useEffect } from 'react'
import { dogsSelector } from './store/selectors/dogsSelectors'
import { Card } from './components/Card/Card'
import * as S from './App.styles'

function App() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetDogQuery(2)
  const dogsList = useSelector(dogsSelector)

  useEffect(() => {
    if (data?.status === 'success') {
      const dogsOfStore = data.message.map((el: string) => {
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
  console.log(dogsList)
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Header>
            {isLoading ? 'Ищем..' : 'Немного картинок пёсиков'}
          </S.Header>
          <S.Main>
            <S.DogList>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </S.DogList>
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
