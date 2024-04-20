import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)
	return (
		<div className='flex flex-col gap-2 justify-center items-center'>
			<h1 className='font-bold'>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
