import {useGetUserQuery} from '../store/github/githubapi'
import {useParams} from 'react-router-dom'
import GitUserData from '../components/gituser-data'

const GitUser = () => {
	const {userLogin} = useParams()
	const {data, isLoading, isError} = useGetUserQuery(userLogin)
  if (isError) throw new Response("", {status: 404, statusText: "Not Found"})
	if (isLoading) return
	return (
		<div className='flex'>
			<img
				className='rounded-3xl bg-gray-300 shadow-md w-48 h-48 mr-8'
				src={data.avatar_url || null}
				alt=''
			/>
			<div>
				<GitUserData data={data} />
				<div className='flex gap-2 border-t-2 my-4 pt-4'>
					<button>Edit</button>
					<button className='text-red-500'>Delete</button>
				</div>
			</div>
		</div>
	)
}

export default GitUser
