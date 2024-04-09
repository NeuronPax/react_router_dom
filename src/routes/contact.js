import {Form} from 'react-router-dom'
import avatar from '../assets/avatar.jpg'

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

const Contact = () => {
	const contact = {
		first: 'Your',
		last: 'Name',
		avatar,
		favorite: true
	}
	return (
		<div id='contact' className='flex'>
			<div>
				<img
					className='rounded-3xl bg-gray-300 w-48 h-48 mr-8'
					src={contact.avatar || null}
					alt=''
				/>
			</div>
			<div>
				<h1 className='flex items-center gap-4 text-4xl font-bold'>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}
					<Favorite favorite={contact.favorite} />
				</h1>
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

export default Contact
