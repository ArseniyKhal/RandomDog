import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image/random',
  }),
  endpoints: (builder) => ({
    getDog: builder.query({
      query: (n) => `/${n}`,
    }),
  }),
})

export const { useGetDogQuery } = dogApi
