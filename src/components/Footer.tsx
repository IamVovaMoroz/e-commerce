import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
	return (
		<div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
			{/* TOP */}
			<div className="flex flex-col md:flex-row justify-between gap-24">
				{/* left */}
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
					<Link href="/">
						<div className="text-2xl tracking-wide">E-Shop</div>
					</Link>
					<p>
						Geneva, Switzerland
					</p>
					<span className="font-semibold">navigators.ua@gmail.com
					</span>
					<span className="font-semibold">+1 234 567 890</span>
					<div className="flex gap-6">
						<Image src="/facebook.png" alt="" width={16} height={16} />
						<Image src="/instagram.png" alt="" width={16} height={16} />
						<Image src="/youtube.png" alt="" width={16} height={16} />
						<Image src="/pinterest.png" alt="" width={16} height={16} />
						<Image src="/x.png" alt="" width={16} height={16} />
					</div>
				</div>
				{/* center */}
				<div className='hidden lg:flex justify-between w-1/2'>				</div>

				{/* right */}
				<div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
					<h1 className="font-medium text-lg">SUBSCRIBE</h1>
					<p>
						Be the first to get the latest news about trends, promotions, and
						much more!
					</p>
					<div className="flex">
						<input
							type="text"
							placeholder="Email address"
							className="p-4 w-3/4" />
							     <button className="w-1/4 bg-lama text-white">JOIN</button>
					</div>
					<span className="font-semibold">Secure Payments</span>
					<div className="flex justify-between">
            <Image src="/discover.png" alt="discover logo" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill logo" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal logo" width={40} height={20} />
            <Image src="/mastercard.png" alt="mastercard logo" width={40} height={20} />
            <Image src="/visa.png" alt="visa logo" width={40} height={20} />
          </div>
				</div>

			</div>
			{/* BOTTOM */}
			<div></div>
		</div>
	)


}

export default Footer
