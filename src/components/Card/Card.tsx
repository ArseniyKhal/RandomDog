import * as S from './Card.styles'

export const Card = () => {
  return (
    <S.Card>
      <S.Pic>
        <S.Img src="img/pic1.jpg" alt="dog" />
      </S.Pic>
      <p>Тут текст</p>
    </S.Card>
  )
}
