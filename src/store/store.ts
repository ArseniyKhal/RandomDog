import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dogApi } from '../services/servicesApi'

export const store = configureStore({
  reducer: {
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
})

setupListeners(store.dispatch)
