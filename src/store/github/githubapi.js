import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
	endpoints: builder => ({
		searchUsers: builder.query({
			query: search => ({
				url: 'search/users',
				params: {
					q: search,
					per_page: 10
				}
			}),
			transformResponse: response => response.items
		}),
		getUser: builder.query({
			query: user => ({
				url: `users/${user}`
			})
		})
	})
})

export const {useSearchUsersQuery, useGetUserQuery} = githubApi
