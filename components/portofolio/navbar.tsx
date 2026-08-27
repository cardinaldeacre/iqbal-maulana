'use client';

import {useEffect, useState} from 'react';
import {smoothScroll} from '@/hooks/smooth-scroll';
import {cn} from '@/lib/utils';

const navigation = [
	{label: 'About', href: '#about'},
	{label: 'Projects', href: '#projects'},
	{label: 'Experience', href: '#experience'},
	{label: 'Achievements', href: '#achievements'},
];

export function Navbar({name}: {name?: string | null}) {
	const [scrolled, setScrolled] = useState(false);
	const {scrollToSection} = smoothScroll();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, {passive: true});

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 transition-all duration-300',
				scrolled ? 'border-b border-white/10 bg-charcoal/75 backdrop-blur-xl' : 'bg-transparent'
			)}>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
				<a
					href="/"
					onClick={(event) => scrollToSection(event, '#home')}
					className="font-bold tracking-tight text-white">
					{name ?? 'Portfolio'}
					<span className="text-gold">.</span>
				</a>

				<nav className="hidden items-center gap-8 md:flex">
					{navigation.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={(event) => scrollToSection(event, item.href)}
							className="
								text-sm font-medium
								text-white/50
								transition
								hover:text-white
							">
							{item.label}
						</a>
					))}
				</nav>

				<a
					href="#contact"
					className="
						rounded-full
						border border-gold/30
						px-4 py-2
						text-sm font-medium
						text-gold-light
						transition
						hover:bg-gold
						hover:text-charcoal
					">
					Let&apos;s Talk
				</a>
			</div>
		</header>
	);
}
