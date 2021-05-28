import Image from 'next/image'
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Header() {
	const [session] = useSession()
	const router = useRouter()

	return (
		<header>
			{/* Top nav */}
			<div className="flex h-14 items-center bg-amazon_blue flex-grow p-1">
				<div className="mt-1 mr-6 flex items-center flex-grow sm:flex-grow-0 ">
					<div className="link p-1 pb-0 pt-2 ml-1">
						<Image
							onClick={() => router.push('/')}
							src="https://links.papareact.com/f90"
							width={100}
							height={40}
							objectFit="contain"
							className="cursor-pointer"
						/>
					</div>
				</div>

				{/* Search */}
				<div className="hidden sm:flex h-10 flex-grow ">
					<input
						className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none"
						type="text"
					/>

					<div className=" rounded-r-md h-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
						<SearchIcon className="h-full p-3" />
					</div>
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-4 mx-6 whitespace-nowrap">
					<div onClick={!session ? signIn : signOut} className="link">
						<p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>

					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">& Orders</p>
					</div>

					<div
						onClick={() => router.push('/checkout')}
						className="relative link flex items-center"
					>
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
							0
						</span>

						<ShoppingCartIcon className="h-10" />
						<p className="hidden md:inline font-extrabold md:text-sm">
							Basket
						</p>
					</div>
				</div>
			</div>

			{/* Bottom nav */}
			<div className="flex h-10 p-2 pl-2 items-center space-x-1 bg-amazon_blue-light text-white text-sm ">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden lg:inline-flex">Electronics</p>
				<p className="link hidden lg:inline-flex">Food & Grocery</p>
				<p className="link hidden lg:inline-flex">Prime</p>
				<p className="link hidden lg:inline-flex">Buy Again</p>
				<p className="link hidden lg:inline-flex">Shopper Toolkit</p>
				<p className="link hidden lg:inline-flex">Health & Personal Care</p>
			</div>
		</header>
	)
}
