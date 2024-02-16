import {
  ADD_DOGS,
  REMOVE_DOG,
  LIKE_DOG,
  ADD_PLAYLIST,
  SET_CURRENT_TRACK,
  TOGGLE_PAUSE,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
} from '../types/constants'

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

export const addPlaylist = (playlist) => ({
  type: ADD_PLAYLIST,
  payload: { playlist },
})

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: { track },
})

export const togglePause = () => ({
  type: TOGGLE_PAUSE,
})

export const nextTrack = () => ({
  type: NEXT_TRACK,
})

export const prevTrack = () => ({
  type: PREV_TRACK,
})

export const toggleShuffle = (status) => ({
  type: SHUFFLE_PLAYLIST,
  payload: { status },
})
