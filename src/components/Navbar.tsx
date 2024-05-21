import Link from 'next/link'
import Menu from './Menu'

const Navbar = () => {
  return (
	<div className='h-20 px-4 md:px-8 xl:32 2xl:px-64 '>
	{/* mobile */}
<Link href='/'>E-Shop</Link>
<Menu/>
	</div>
  )
}

export default Navbar
