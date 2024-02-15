export const dogsSelector = (store) => store.dogs.dogsList

// список собачек с API
export const dogslistSelector = (store) => dogsSelector(store)?.dogslist

// список треков с API
export const playListSelector = (store) => audioplayerSelector(store)?.playlist

// перемешанный список треков с API
export const playListShuffleSelector = (store) =>
  audioplayerSelector(store).shuffledPlaylist

// текущий трек в плеере
export const currentTrackSelector = (store) => audioplayerSelector(store)?.track

// статус воспроизведения
export const isPlauingSelector = (store) => audioplayerSelector(store)?.plauing

// статус воспроизведения в перемешку
export const isShuffledSelector = (store) => audioplayerSelector(store).shuffled
