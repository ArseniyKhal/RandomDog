import { Card } from './components/Card/Card'
// import { useEffect } from 'react'
import { useGetDogQuery } from './services/servicesApi'
import * as S from './App.styles'

function App() {
  const { data, isError, isLoading } = useGetDogQuery(5)

  console.log(data)

  //   useEffect(() => {
  //     console.log('старт')
  //   }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Header>
            {isLoading ? 'Ищем..' : 'Немного картинок пёсиков'}
            {/* Немного картинок пёсиков */}
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
