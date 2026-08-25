import Link from 'next/link';

type HeroProps = {
	name?: string | null;
	headline?: string | null;
	bio?: string | null;
};

export function Hero({name, headline, bio}: HeroProps) {
	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
			<div
				className="
          pointer-events-none
          absolute -right-40 top-20
          h-96 w-96
          rounded-full
          bg-gold/10
          blur-3xl
        "
			/>

			<div
				className="
          pointer-events-none
          absolute -left-32 bottom-0
          h-72 w-72
          rounded-full
          bg-sand/5
          blur-3xl
        "
			/>

			<div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8">
				<div className="max-w-4xl">
					<div className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-light">
							Full-Stack Developer
						</p>
					</div>

					<h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
						Hi, I&apos;m <span className="text-gold-light">{name ?? 'Developer'}</span>.
					</h1>

					<h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">
						{headline ?? 'I build thoughtful digital experiences that solve real problems.'}
					</h2>

					{bio && (
						<p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">{bio}</p>
					)}

					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href="#projects"
							className="
                rounded-xl
                bg-gold
                px-6 py-3
                text-sm font-semibold
                text-charcoal
                transition
                hover:bg-gold-light
              ">
							View Projects
						</Link>

						<Link
							href="#contact"
							className="
                rounded-xl
                border border-white/15
                px-6 py-3
                text-sm font-semibold
                text-white
                transition
                hover:border-gold/40
                hover:bg-white/5
              ">
							Contact Me
						</Link>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
				<Link
					href="#about"
					className="text-xs uppercase tracking-[0.25em] text-white/30 transition hover:text-gold">
					Scroll to explore ↓
				</Link>
			</div>
		</section>
	);
}
