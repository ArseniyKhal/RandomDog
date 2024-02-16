import { Link } from 'react-router-dom'
import { MouseEvent, useState } from 'react'
import * as S from './Card.styles'

export const Card = ({ dataCard }: any) => {
  const [isLike, setLike] = useState(false)
  const handleDelClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('удалить')
  }
  const handleLikeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('лайк')
    setLike(!isLike)
  }

  return (
    <Link to={`/card/${dataCard?.id}`}>
      <S.Card onClick={() => console.log('клик по карточке')}>
        <S.Picture>
          <S.Img src={dataCard?.urlImg} alt="dog" />
        </S.Picture>
        <S.CardBody>
          <S.CardText>Порода: {dataCard?.breed}</S.CardText>
          <S.CardButtons>
            <S.Button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                handleDelClick(e)
              }}
            >
              Удалить
            </S.Button>
            <S.Button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                handleLikeClick(e)
              }}
            >
              <S.ButtonSvg primary={isLike} viewBox="0 0 16 12">
                <path
                  d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                  stroke="red"
                />
              </S.ButtonSvg>
            </S.Button>
          </S.CardButtons>
        </S.CardBody>
      </S.Card>
    </Link>
  )
}
