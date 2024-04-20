import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/layout'
import ErrorPage from './error-page'
import GitUser from './pages/gituser'
import {Provider} from 'react-redux'
import {store} from './store'

import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'users/:userLogin',
				element: <GitUser />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
