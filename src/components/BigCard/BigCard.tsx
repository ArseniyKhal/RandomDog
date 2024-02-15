import { useSelector } from 'react-redux'
import { dogsSelector } from '../../store/selectors/dogsSelectors'
import { Container } from '../../App.styles'
import { DogType } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './BigCard.styles'
import { useEffect } from 'react'

export const BigCard = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dogsList = useSelector(dogsSelector)
  const cardData = dogsList?.filter((el: DogType) => el.id === id)[0]

  useEffect(() => {
    if (!cardData) {
      navigate('/')
    }
  }, [dogsList])

  return (
    <S.BigCard>
      <Container>
        <S.Card>
          <S.Picture>
            <S.Img src={cardData?.urlImg} alt="dog" />
          </S.Picture>
          <S.CarBody>
            <S.CarText>Порода: {cardData?.breed}</S.CarText>
            <S.CarButtons>
              <S.Button>Удалить</S.Button>
              <S.Button>Лайк</S.Button>
            </S.CarButtons>
          </S.CarBody>
        </S.Card>
      </Container>
    </S.BigCard>
  )
}
