import Favorite from '../components/favorite'

const fetchData = [
  {name: 'Login', key: 'login'},
  {name: 'Name', key: 'name'},
  {name: 'Account URL', key: 'html_url'},
  {name: 'Location', key: 'location'},
  {name: 'Account created', key: 'created_at'}
]

const dateOption = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

const GitUserData = ({data}) => (
  <div className='rounded-lg bg-gray-100 p-2'>
    <table className='text-gray-700 w-full'>
      <caption className="flex items-center caption-top font-bold pl-2">
        <u>Favorite:</u>
        <Favorite favorite={true} />
      </caption>
      <tbody>
        {fetchData.map(el => (
          data[el['key']] && <tr key={el['name']}>
            <td className='border border-2 border-white text-right p-2'>
              {`${el['name']}:`}
            </td>
            <th className='border border-2 border-white text-left w-96 p-2'>
              {el['key'] === ('html_url') ?
                  <a
                    href={data[el['key']]}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-blue-700 italic'>
                      {data[el['key']]}
                  </a>
                : el['key'] === 'created_at' ?
                  new Date(data[el['key']]).toLocaleString('ru-RU', dateOption)
                :
                  data[el['key']]}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default GitUserData
