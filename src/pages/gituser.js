import {useGetUserQuery} from '../store/github/githubapi'
import {Form, useParams} from 'react-router-dom'

const Favorite = ({favorite}) => {
	return (
		<Form method='post'>
			<button className={`bg-transparent shadow-none hover:shadow-none text-xl p-0 ${
          favorite ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
				}`}>
				{favorite ? '★' : '☆'}
			</button>
		</Form>
	)
}

const GitUser = () => {
	const {userLogin} = useParams()
	const {data, isLoading} = useGetUserQuery(userLogin)
	if (isLoading) return
	return (
		<div className='flex'>
      <img
        className='rounded-3xl bg-gray-300 w-48 h-48 mr-8'
        src={data.avatar_url || null}
        alt=''
      />
			<div>
        <div className='rounded-lg bg-gray-100 p-2'>
          <table className='text-gray-700 w-full'>
            <tbody>
              <tr>
                <td className='border border-2 border-white text-right p-2'>Login:</td>
                <th className='flex gap-2 items-center border border-2 border-white text-left w-96 p-2'>
                  {data.login}
                  <Favorite favorite={true} />
                </th>
              </tr>
              <tr>
                <td className='border border-2 border-white text-right p-2'>Name:</td>
                <th className='border border-2 border-white text-left w-96 p-2'>
                  {data.name ? (
                    <>{data.name}</>
                  ) : (
                    <i>No Name</i>
                  )}
                </th>
              </tr>
              <tr>
                <td className='border border-2 border-white text-right p-2'>Account URL:</td>
                <th className='border border-2 border-white text-left w-96 p-2'>
                  <a
                    href={data.html_url}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-blue-700'>
                      {data.html_url}
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
				<div className='flex gap-2 border-t-2 my-4 pt-4'>
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
