import * as S from './Card.styles'

export const Card = ({ dataCard }: any) => {
  return (
    <S.Card>
      <S.Pic>
        <S.Img src={dataCard.urlImg} alt="dog" />
      </S.Pic>
      <p>Порода: {dataCard.breed}</p>
    </S.Card>
  )
}
