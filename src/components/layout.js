import {useState} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {useSearchUsersQuery} from '../store/github/githubapi'
import {useDebounce} from '../hooks/debounce'

const Layout = () => {
	const [search, setSearch] = useState('neuronp')
	const debounced = useDebounce(search)
	const {data} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3
	})
	return (
		<div className='flex min-h-screen'>
			<div className='flex flex-col bg-gray-100 border-r-2 w-96'>
				<div className='border-b-2 py-4 px-4'>
					<input
						className='w-full'
						type='search'
						placeholder='Search for Github username'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<nav className='flex-1 py-2 px-4'>
					<ul className='divide-y divide-gray-200'>
						{debounced.length > 2 &&
							data?.map(({id, login, avatar_url, html_url}) => (
								<li key={id} className='py-1'>
									<Link
										to={`/users/${login}`}
										className='flex rounded-md p-2 hover:bg-gray-200'>
										<img
											className='h-10 w-10 rounded-full'
											src={avatar_url || null}
											alt=''
										/>
										<div className='ml-3'>
											<p className='font-medium text-gray-900'>{login}</p>
											<p className='text-sm text-gray-500'>{html_url}</p>
										</div>
									</Link>
								</li>
							))}
					</ul>
				</nav>
				<h1 className='border-t-2 text-center font-bold py-4'>
					<span className='relative -top-1'>Git</span>
					<span className='before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-900 relative m-2'>
						<span className='relative text-white font-black italic'>Hub</span>
					</span>
					<span className='relative -top-0.5'>API</span>
				</h1>
			</div>
			<div className='flex-1 py-8 px-16'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
