import Logo from '../components/logo'

const Index = () => {
	return (
    <div className='flex flex-col items-center text-xl my-8'>
      <Logo />
      <span>This is a demo for GitHub API</span>
      <span>
        <span>Visit </span>
        <a
          href='https://github.com'
          target='_blank'
          rel='noreferrer noopener'
          className='text-blue-500 font-medium underline'>
            github.com
        </a>
         <span> software development platform</span>
      </span>
    </div>
	)
}

export default Index
