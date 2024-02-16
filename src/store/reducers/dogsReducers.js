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
} from '../actions/types/constants'

const initialState = []

//   dogs: [],
//   plauing: false,
//   playlist: [],
//   track: null,
//   shuffled: false,
//   shuffledPlaylist: [],
// }

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

    // загрузка плей-листа
    case ADD_PLAYLIST: {
      const { playlist } = action.payload
      return {
        ...state,
        playlist,
      }
    }

    // загрузка трека в плеер
    case SET_CURRENT_TRACK: {
      const { track } = action.payload
      return {
        ...state,
        track,
        plauing: true,
      }
    }

    // пауза
    case TOGGLE_PAUSE: {
      return {
        ...state,
        plauing: !state.plauing,
      }
    }

    // следующий трек
    case NEXT_TRACK: {
      const { id } = state.track
      const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist
      const currentTrackIndex = playlist.findIndex((track) => track.id === id)
      const newTrack = playlist[currentTrackIndex + 1]
      if (!newTrack) {
        return state
      }
      return {
        ...state,
        track: newTrack,
        plauing: true,
      }
    }

    // предыдущий трек
    case PREV_TRACK: {
      const { id } = state.track
      const plaulist = state.shuffled ? state.shuffledPlaylist : state.playlist
      const currentTrackIndex = plaulist.findIndex((track) => track.id === id)
      const prevTrack = plaulist[currentTrackIndex - 1]
      if (currentTrackIndex === 0) {
        return state
      }
      return {
        ...state,
        track: prevTrack,
        plauing: true,
      }
    }

    // перемешать треки в плейлисте
    case SHUFFLE_PLAYLIST: {
      const { status } = action.payload
      return {
        ...state,
        shuffled: status ? false : !state.shuffled,
        shuffledPlaylist: [...state.playlist].sort(() => 0.5 - Math.random()),
      }
    }

    default:
      return state
  }
}
