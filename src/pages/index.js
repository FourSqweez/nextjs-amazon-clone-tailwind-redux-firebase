import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
export default function Home() {
	return (
		<div className="bg-gray-100">
			<Head>Amazon 2.0</Head>
			<Header />

			<main className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<Banner />

				{/* ProductFeed */}
			</main>
		</div>
	)
}
