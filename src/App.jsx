import { Card } from './components/Card/Card'
import * as S from './App.styles'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Header>Немного картинок пёсиков</S.Header>
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
