import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { removeDog } from '../../store/actions/creators/dogsCreator'
import * as S from './RemoveButton.styles'

export const RemoveButton = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  return (
    <S.CardButton
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(removeDog(id))
      }}
    >
      Удалить
    </S.CardButton>
  )
}
