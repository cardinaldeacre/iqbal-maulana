'use client';

import ProfileCard from '@/components/react-bits/profile-card';
import Folder from '@/components/react-bits/folder';

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

					<div className="mt-6 rounded-2xl border border-charcoal/10 bg-graphite p-6">
						<p className="text-md font-bold pb-10 uppercase tracking-[0.2em] text-sand-light">
							Quick Facts
						</p>

						<div
							className="
							grid
							grid-cols-1
							gap-14
							sm:grid-cols-3
							sm:gap-8
							">
							<div className="flex min-h-25 flex-col items-center justify-center">
								<Folder
									color="#C39A52"
									size={1.35}
									items={[
										<div
											key="focus-web"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Web
												<br />
												Development
											</span>
										</div>,

										<div
											key="focus-mobile"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Mobile
												<br />
												Development
											</span>
										</div>,

										<div
											key="focus-fullstack"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Full-Stack
												<br />
												Development
											</span>
										</div>,
									]}
								/>

								<div className="mt-8 text-center">
									<p className="text-xs uppercase tracking-[0.18em] text-sand-light">Focus</p>
								</div>
							</div>

							<div className="flex min-h-25 flex-col items-center justify-center">
								<Folder
									color="#B58B45"
									size={1.35}
									items={[
										<div
											key="approach-problem"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Problem
												<br />
												Solving
											</span>
										</div>,

										<div
											key="approach-practical"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Practical
												<br />
												Systems
											</span>
										</div>,

										<div
											key="approach-user"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												User-Focused
												<br />
												Design
											</span>
										</div>,
									]}
								/>

								<div className="mt-8 text-center">
									<p className="text-xs uppercase tracking-[0.18em] text-sand-light">Approach</p>
								</div>
							</div>

							<div className="flex min-h-25 flex-col items-center justify-center">
								<Folder
									color="#A87C35"
									size={1.35}
									items={[
										<div
											key="interest-backend"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-bold leading-tight text-charcoal">
												Backend
												<br />
												Engineering
											</span>
										</div>,

										<div
											key="interest-product"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												Product
												<br />
												Engineering
											</span>
										</div>,

										<div
											key="interest-system"
											className="flex h-full w-full items-center justify-center p-2 text-center">
											<span className="text-[9px] font-semibold leading-tight text-charcoal">
												System
												<br />
												Architecture
											</span>
										</div>,
									]}
								/>

								<div className="mt-8 text-center">
									<p className="text-xs uppercase tracking-[0.18em] text-sand-light">Interests</p>
								</div>
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
