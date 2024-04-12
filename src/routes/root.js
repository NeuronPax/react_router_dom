import {useEffect, useState} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {useSearchUsersQuery} from '../store/github/githubapi'
import {useDebounce} from '../hooks/debounce'

const Root = () => {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search)
	const {data, isLoading} = useSearchUsersQuery('vladilen')
	useEffect(() => console.log(debounced), [debounced])
	return (
		<div className='flex h-screen'>
			<div id='sidebar' className='flex flex-col bg-gray-100 border-r-2 w-96'>
				<div className='border-b-2 py-4 px-8'>
					<input
						className='w-full'
						type='search'
						placeholder='Search for Github username'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<nav className='flex-1 py-4 px-8'>
					<ul>
						<li>
							<Link
								to={`/contacts/1`}
								className='flex rounded-lg my-1 p-2 hover:bg-gray-200'>
								Your Name
							</Link>
						</li>
						<li>
							<Link
								to={`/contacts/2`}
								className='flex rounded-lg p-2 hover:bg-gray-200'>
								Your Friend
							</Link>
						</li>
					</ul>
				</nav>
				<h1 className='border-t-2 text-center font-medium py-4'>
					React Router Contacts
				</h1>
			</div>
			<div id='detail' className='flex-1 py-8 px-16'>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
