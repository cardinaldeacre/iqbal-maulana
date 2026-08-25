import Link from 'next/link';

const navigation = [
	{label: 'About', href: '#about'},
	{label: 'Projects', href: '#projects'},
	{label: 'Experience', href: '#experience'},
	{label: 'Achievements', href: '#achievements'},
	{label: 'Contact', href: '#contact'},
];

type NavbarProps = {
	name?: string | null;
};

export function Navbar({name}: NavbarProps) {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
				<Link href="/" className="text-lg font-bold tracking-tight text-white">
					{name ?? 'Portfolio'}
					<span className="text-gold">.</span>
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-white/60 transition hover:text-gold-light">
							{item.label}
						</Link>
					))}
				</nav>

				<Link
					href="#contact"
					className="
            rounded-full
            border border-gold/40
            px-4 py-2
            text-sm font-medium
            text-gold-light
            transition
            hover:bg-gold
            hover:text-charcoal
          ">
					Let&apos;s Talk
				</Link>
			</div>
		</header>
	);
}
