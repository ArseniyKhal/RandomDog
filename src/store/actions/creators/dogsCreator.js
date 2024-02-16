import { ADD_DOGS, REMOVE_DOG, LIKE_DOG } from '../types/constants'

export const addDogList = (dogsList) => ({
  type: ADD_DOGS,
  payload: { dogsList },
})
export const removeDog = (id) => ({
  type: REMOVE_DOG,
  payload: { id },
})
export const likeDog = (id) => ({
  type: LIKE_DOG,
  payload: { id },
})
