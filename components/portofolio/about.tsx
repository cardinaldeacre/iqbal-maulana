'use client';

import ProfileCard from '@/components/react-bits/profile-card';

type AboutProps = {
	bio?: string | null;
	avatarUrl?: string | null;
	name?: string | null;
	headline?: string | null;
};

export function About({bio, avatarUrl, name, headline}: AboutProps) {
	const handleContactClick = () => {
		const contactSection = document.querySelector('#contact');

		contactSection?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<section id="about" className="overflow-hidden bg-ivory py-24 text-charcoal">
			<div
				className="
          mx-auto grid max-w-7xl
          items-center gap-14
          px-6
          lg:grid-cols-[1.15fr_0.85fr]
          lg:px-8
        ">
				{/* LEFT CONTENT */}
				<div>
					<div className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							About Me
						</p>
					</div>

					<h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
						Building software with purpose, not just features.
					</h2>

					<p className="mt-6 max-w-3xl text-base leading-8 text-stone sm:text-lg">
						{bio ??
							'I’m a software developer focused on building practical web and mobile applications that solve real-world problems.'}
					</p>

					<div className="mt-10 rounded-2xl border border-charcoal/10 bg-sand-light p-6">
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-dark">
							Quick Facts
						</p>

						<div className="mt-6 grid gap-5 sm:grid-cols-3">
							<div>
								<p className="text-xs uppercase tracking-wider text-stone">Focus</p>

								<p className="mt-1 font-medium">Web & Mobile Development</p>
							</div>

							<div>
								<p className="text-xs uppercase tracking-wider text-stone">Approach</p>

								<p className="mt-1 font-medium">Problem Solving & Practical Systems</p>
							</div>

							<div>
								<p className="text-xs uppercase tracking-wider text-stone">Interests</p>

								<p className="mt-1 font-medium">
									Full-Stack, Mobile, Backend & Product Engineering
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<ProfileCard
						name={name ?? 'Iqbal Maulana'}
						title={headline ?? 'Full-Stack Developer'}
						handle="cardinaldeacre"
						status="Available"
						contactText="Contact Me"
						avatarUrl={avatarUrl ?? '/avatar-placeholder.png'}
						miniAvatarUrl={avatarUrl ?? '/avatar-placeholder.png'}
						showUserInfo
						enableTilt
						enableMobileTilt={false}
						onContactClick={handleContactClick}
						behindGlowEnabled
						behindGlowColor="rgba(190, 145, 60, 0.32)"
						behindGlowSize="70%"
						innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
						className="w-full max-w-95"
					/>
				</div>
			</div>
		</section>
	);
}
