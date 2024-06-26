import {NavLink} from 'react-router-dom'
import {useSearchUsersQuery} from '../store/github/githubapi'

const NavBarList = ({debounced}) => {
	const {data} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3
	})
	return (
    <nav className='flex-1 border-y-2 py-2 px-4'>
      <ul className='divide-y divide-gray-200'>
        {debounced.length > 2 &&
          data?.map(({id, login, avatar_url, html_url}) => (
            <li key={id} className='py-1'>
              <NavLink
                to={`/users/${login}`}
                className={({isActive}) => `flex rounded-md p-2 hover:bg-gray-200 ${isActive && 'bg-gray-300'}`}>
                <img
                  className='h-10 w-10 rounded-full'
                  src={avatar_url || null}
                  alt=''
                />
                <div className='ml-3'>
                  <p className='font-medium text-gray-900'>{login}</p>
                  <p className='text-sm text-gray-500'>{html_url}</p>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
	)
}

export default NavBarList
