import { Link } from 'react-router-dom'
import { LikeButton } from '../LikeButton/LikeButton'
import { RemoveButton } from '../RemoveButton/RemoveButton'
import { DogType } from '../../App'
import * as S from './Card.styles'

export const Card = ({ dataCard }: { dataCard: DogType }) => {
  return (
    <Link to={`/card/${dataCard?.id}`}>
      <S.Card>
        <S.Picture>
          <S.Img src={dataCard?.urlImg} alt="dog" />
        </S.Picture>
        <S.CardBody>
          <S.CardText>Порода: {dataCard?.breed}</S.CardText>
          <S.CardButtons>
            <RemoveButton id={dataCard.id}></RemoveButton>
            <LikeButton dataCard={dataCard}></LikeButton>
          </S.CardButtons>
        </S.CardBody>
      </S.Card>
    </Link>
  )
}
