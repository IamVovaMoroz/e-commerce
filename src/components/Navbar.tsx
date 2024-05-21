import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
	return (
		<div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
			{/* mobile */}
			<div className=' h-full flex items-center justify-between md:hidden'>
				

				<Link href='/'>
					<div className='text-2xl tracking-wide'>E-Shop</div>
					</Link>
				<Menu />
			</div>
				{/* bigger screens */}
				<div className='hidden md:flex items-center h-full justify-between gap-8'>
	{/* Left  */}
	<div className='w-1/3'>
		<Link href='/' className='flex items-center gap-3'>
			<Image src='/logo.png' alt='logo img' width={24} height={24}/>
		<div className='text-2xl tracking-wide'>E-Shop</div>
		</Link>
	</div>
	{/* Right  */}
	<div className='w-2/3 flex items-center justify-between gap-8'>
<SearchBar/>
<NavIcons/>

	</div>
				</div>
		</div>
	)
}

export default Navbar

