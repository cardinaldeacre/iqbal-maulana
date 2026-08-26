import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Iqbal Maulana | Full Stack Developer',
	description: 'Personal portfolio of Iqbal Maulana.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body className="min-h-screen font-sans antialiased">{children}</body>
		</html>
	);
}
