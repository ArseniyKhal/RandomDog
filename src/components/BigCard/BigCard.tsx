import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dogsSelector } from '../../store/selectors/dogsSelectors'
import { Container } from '../../App.styles'
import { DogType } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { LikeButton } from '../LikeButton/LikeButton'
import { RemoveButton } from '../RemoveButton/RemoveButton'
import * as S from './BigCard.styles'

export const BigCard = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dogsList = useSelector(dogsSelector)
  const dataCard = dogsList?.filter((el: DogType) => el.id === id)[0]

  useEffect(() => {
    if (!dataCard) {
      navigate('/')
    }
  }, [dogsList])

  return (
    <S.BigCard>
      <Container>
        <S.Content>
          <S.ToMainButton>
            <Link to={`/`} style={{ width: '100%' }}>
              <S.ToMainButtonText>
                Вернуться на главную страницу
              </S.ToMainButtonText>
            </Link>
          </S.ToMainButton>
          <S.Img src={dataCard?.urlImg} alt="dog" />
          <S.CardBody>
            <S.CardText>Порода: {dataCard?.breed}</S.CardText>
            <S.CardText>
              Сылка для скачивания:
              <S.DownloadLink href={dataCard?.urlImg}>
                {` ${dataCard?.urlImg}`}
              </S.DownloadLink>
            </S.CardText>
            <S.CardButtons>
              <RemoveButton id={dataCard?.id}></RemoveButton>
              <LikeButton dataCard={dataCard}></LikeButton>
            </S.CardButtons>
          </S.CardBody>
        </S.Content>
      </Container>
    </S.BigCard>
  )
}
