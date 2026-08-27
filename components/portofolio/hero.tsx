'use client';

import Particles from '@/components/react-bits/particles';
import SplitText from '@/components/react-bits/split-text';
import ShinyText from '@/components/react-bits/shiny-text';
import Magnet from '@/components/react-bits/magnet';
import {smoothScroll} from '@/hooks/smooth-scroll';

import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';

type HeroProps = {
	name?: string | null;
	headline?: string | null;
	bio?: string | null;
};

export function Hero({name, headline}: HeroProps) {
	const {scrollToSection} = smoothScroll();

	return (
		<section
			id="home"
			className="
                relative flex min-h-screen
                items-center justify-center
                overflow-hidden
                bg-charcoal
                px-6
            ">
			<div className="absolute inset-0">
				<Particles
					particleColors={['#ffffff']}
					particleCount={1000}
					particleSpread={10}
					speed={0.6}
					particleBaseSize={100}
					moveParticlesOnHover
					alphaParticles
					disableRotation
					pixelRatio={1}
				/>
			</div>

			<div
				className="
                    pointer-events-none
                    absolute inset-0
                    bg-linear-to-b
                    from-charcoal/10
                    via-charcoal/35
                    to-charcoal
                "
			/>

			<div
				className="
                    pointer-events-none
                    absolute left-1/2 top-[38%]
                    h-80 w-80
                    -translate-x-1/2
                    rounded-full
                    bg-gold/10
                    blur-[120px]
                "
			/>

			<div
				className="
                    relative z-10
                    mx-auto flex
                    w-full max-w-6xl
                    flex-col items-center
                    text-center
                ">
				<div
					className="
                        mb-8 flex items-center gap-3
                        rounded-full
                        border border-white/10
                        bg-white/3
                        px-5 py-2.5
                        backdrop-blur-md
                    ">
					<span className="size-2 rounded-full bg-gold" />

					<ShinyText
						text="IQBAL MAULANA"
						disabled={false}
						speed={2}
						className="
                            text-xs font-semibold
                            tracking-[0.08em]
                            text-gold-light
                            sm:text-sm
                        "
					/>

					<span className="h-4 w-px bg-white/15" />

					<ShinyText
						text="FULL STACK DEVELOPER"
						disabled={false}
						speed={3}
						className="
                            text-xs font-semibold
                            tracking-[0.08em]
                            text-gold-light
                            sm:text-sm
                        "
					/>
				</div>

				<SplitText
					text="I BUILD DIGITAL PRODUCTS THAT MATTER."
					className="
                        max-w-4xl
                        text-5xl font-bold
                        uppercase
                        leading-[0.98]
                        tracking-[-0.045em]
                        text-white
                        sm:text-4xl
                        lg:text-5xl
                        xl:text-6xl
                    "
					delay={20}
					duration={1}
					ease="elastic.out(1, 0.3)"
					splitType="chars"
					from={{
						opacity: 0,
						y: 50,
					}}
					to={{
						opacity: 1,
						y: 0,
					}}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="center"
				/>

				<p
					className="
                        mt-6 max-w-2xl
                        text-sm leading-7
                        text-white/45
                        sm:text-base
                    ">
					{headline ??
						'I design and build thoughtful web and mobile experiences that solve real problems.'}
				</p>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Magnet padding={40} disabled={false} magnetStrength={3}>
						<a
							href="#projects"
							onClick={(event) => scrollToSection(event, '#projects')}
							className={cn(
								buttonVariants({
									variant: 'default',
									size: 'lg',
								}),
								'min-w-44 rounded-full px-6'
							)}>
							View My Work
							<span>↗</span>
						</a>
					</Magnet>

					<a
						href="#contact"
						onClick={(event) => scrollToSection(event, '#contact')}
						className={cn(
							buttonVariants({
								variant: 'outline',
								size: 'lg',
							}),
							'min-w-40 rounded-full px-6'
						)}>
						Let&apos;s Talk
						<span className="text-gold-light">↗</span>
					</a>
				</div>
			</div>

			<a
				href="#about"
				onClick={(event) => scrollToSection(event, '#about')}
				className="
					absolute bottom-8 left-1/2 z-10
					flex -translate-x-1/2
					flex-col items-center gap-3
					text-white/30
					transition
					hover:text-gold-light
				">
				<span
					className="
                        flex h-12 w-7
                        items-start justify-center
                        rounded-full
                        border border-white/30
                        p-1
                    ">
					<span className="mt-1 size-1.5 rounded-full bg-gold" />
				</span>

				<span
					className="
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                    ">
					Scroll to explore
				</span>
			</a>
		</section>
	);
}
