import {Outlet, Link} from 'react-router-dom'

const Root = () => {
  return (
    <div className='flex h-screen'>
      <div id='sidebar' className='flex flex-col bg-gray-100 border-r-2 w-96'>
        <div className='flex border-b-2 gap-2 py-4 px-8'>
          <form id='search-form' className='flex-1' role='search'>
            <input
              id='q'
              className='w-full'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q' />
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav className='pl-8'>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
        <h1 className='border-t-2 text-center font-medium py-4'>React Router Contacts</h1>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root