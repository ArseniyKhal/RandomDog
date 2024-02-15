import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dogApi } from '../services/servicesApi'
import dogsReducer from './reducers/dogsReducers'

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
})

setupListeners(store.dispatch)
