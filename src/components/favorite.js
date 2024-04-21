const Favorite = ({favorite}) => (
	<button
		className={`bg-transparent shadow-none hover:shadow-none text-xl ml-4 p-0 ${
			favorite ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
		}`}>
		{favorite ? '★' : '☆'}
	</button>
)

export default Favorite
