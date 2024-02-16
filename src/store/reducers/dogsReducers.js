import { ADD_DOGS, REMOVE_DOG, LIKE_DOG } from '../actions/types/constants'

const initialState = []

export default function dogsReducer(state = initialState, action) {
  switch (action.type) {
    // загрузка собачек
    case ADD_DOGS: {
      const { dogsList } = action.payload
      return {
        ...state,
        dogsList,
      }
    }

    // удалить собачку из списка
    case REMOVE_DOG: {
      const { id } = action.payload
      return {
        ...state,
        dogsList: state.dogsList.filter((el) => el.id !== id),
      }
    }

    // лайк по собачке
    case LIKE_DOG: {
      const { id } = action.payload
      const newDogsList = state.dogsList.map((value) =>
        Object.assign({}, value),
      )
      const index = newDogsList.findIndex((el) => el.id === id)
      newDogsList[index].isLike = !newDogsList[index].isLike
      return {
        ...state,
        dogsList: newDogsList,
      }
    }

    default:
      return state
  }
}
