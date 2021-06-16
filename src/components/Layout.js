import Header from './Header'
import Head from 'next/head'
export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>amazon 2.0</title>
			</Head>
			<Header />
			{children}
		</div>
	)
}
