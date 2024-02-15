import { Link } from 'react-router-dom'
import * as S from './Card.styles'

export const Card = ({ dataCard }: any) => {
  return (
    <Link to={`/card/${dataCard?.id}`}>
      <S.Card>
        <S.Picture>
          <S.Img src={dataCard?.urlImg} alt="dog" />
        </S.Picture>
        <S.CarBody>
          <S.CarText>Порода: {dataCard?.breed}</S.CarText>
          <S.CarButtons>
            <S.Button>Удалить</S.Button>
            <S.Button>Лайк</S.Button>
          </S.CarButtons>
        </S.CarBody>
      </S.Card>
    </Link>
  )
}
