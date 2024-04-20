import {useGetUserQuery} from '../store/github/githubapi'
import {Form, useParams} from 'react-router-dom'

const Favorite = ({favorite}) => {
	return (
		<Form method='post'>
			<button
				className={`shadow-none hover:shadow-none ${
					favorite ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
				}`}
				name='favorite'
				value={favorite ? 'false' : 'true'}
				aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
				{favorite ? '★' : '☆'}
			</button>
		</Form>
	)
}

const GitUser = () => {
	const contact = {
		first: 'Your',
		last: 'Name',
		favorite: true
	}
	const {userLogin} = useParams()
	const {data, isLoading} = useGetUserQuery(userLogin)
	if (isLoading) return
	return (
		<div className='flex'>
			<div>
				<img
					className='rounded-3xl bg-gray-300 w-48 h-48 mr-8'
					src={data.avatar_url || null}
					alt=''
				/>
			</div>
			<div>
				<h1 className='flex gap-4 text-4xl font-bold mb-4'>
					<div className='flex flex-col gap-4'>
						<span>
							Login: <u>{data.login}</u>
						</span>
						{data.name ? (
							<span>
								Name: <u>{data.name}</u>
							</span>
						) : (
							<i>No Name</i>
						)}
					</div>
					<Favorite favorite={contact.favorite} />
				</h1>
				<a href={data.html_url} target='_blank' className='text-blue-700'>
					{data.html_url}
				</a>
				<div className='flex gap-2 my-4'>
					<Form action='edit'>
						<button type='submit'>Edit</button>
					</Form>
					<Form
						method='post'
						action='destroy'
						onSubmit={e => {
							if (
								!window.confirm(
									'Please confirm you want to delete this record.'
								)
							) {
								e.preventDefault()
							}
						}}>
						<button className='text-red-500' type='submit'>
							Delete
						</button>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default GitUser
