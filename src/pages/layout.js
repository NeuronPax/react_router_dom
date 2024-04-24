import {useState} from 'react'
import {Outlet, useNavigation} from 'react-router-dom'
import {useDebounce} from '../hooks/debounce'
import NavBarList from '../components/navbar-list'
import Logo from '../components/logo'

const Layout = () => {
	const [search, setSearch] = useState('neuronp')
	const debounced = useDebounce(search)
  const navigation = useNavigation()
	return (
		<div className='flex min-h-screen'>
			<div className='flex flex-col bg-gray-100 border-r-2 w-96'>
				<div className='py-4 px-4'>
					<input
						className='w-full'
						type='search'
						placeholder='Search for Github username'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<NavBarList debounced={debounced} />
				<Logo />
			</div>
			<div className={`flex-1 py-8 px-16 ${navigation.state === 'loading' ? 'opacity-25 transition-opacity delay-200' : ''}`}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
