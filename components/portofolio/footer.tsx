import Link from 'next/link';

type FooterProps = {
	name?: string | null;
	githubUrl?: string | null;
	linkedinUrl?: string | null;
};

export function Footer({name, githubUrl, linkedinUrl}: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 bg-graphite text-white">
			<div
				className="
                    mx-auto flex max-w-7xl
                    flex-col gap-5
                    px-6 py-8
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    lg:px-8
                    ">
				<div>
					<p className="font-semibold">
						{name ?? 'Portfolio'}
						<span className="text-gold">.</span>
					</p>

					<p className="mt-1 text-xs text-white/35">© {year}. Built with Next.js & Supabase.</p>
				</div>

				<div className="flex items-center gap-5">
					{githubUrl && (
						<Link
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-white/45 transition hover:text-gold-light">
							GitHub
						</Link>
					)}

					{linkedinUrl && (
						<Link
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-white/45 transition hover:text-gold-light">
							LinkedIn
						</Link>
					)}

					<Link href="#home" className="text-sm text-white/45 transition hover:text-gold-light">
						Back to top ↑
					</Link>
				</div>
			</div>
		</footer>
	);
}
