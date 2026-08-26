'use client';

import Link from 'next/link';
import {motion} from 'motion/react';
import {ArrowDownRight, ArrowUpRight} from 'lucide-react';

import {Button, buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';

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
				pointer-events-none absolute inset-0
				bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
				bg-size[48px_48px]
				mask-[linear-gradient(to_bottom,black,transparent)]
				"
			/>

			<motion.div
				className="
					pointer-events-none
					absolute right-[8%] top-[18%]
					h-80 w-80
					rounded-full
					bg-gold/15
					blur-3xl
					"
				animate={{
					x: [0, 30, -10, 0],
					y: [0, -20, 25, 0],
					scale: [1, 1.08, 0.96, 1],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8">
				<div className="max-w-5xl">
					<motion.div
						initial={{opacity: 0, y: 18}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.55}}
						className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.28em] text-gold-light">
							Full-Stack Developer
						</p>
					</motion.div>

					<motion.h1
						initial={{opacity: 0, y: 36}}
						animate={{opacity: 1, y: 0}}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="
							max-w-5xl
							text-5xl font-bold
							leading-[0.98]
							tracking-[-0.04em]
							text-white
							sm:text-6xl
							lg:text-8xl
							">
						I build digital
						<span className="block text-gold-light">products that matter.</span>
					</motion.h1>

					<motion.div
						initial={{opacity: 0, y: 24}}
						animate={{opacity: 1, y: 0}}
						transition={{
							duration: 0.65,
							delay: 0.22,
						}}
						className="mt-8 max-w-2xl">
						<p className="text-lg leading-8 text-white/55">
							Hi, I&apos;m <span className="font-medium text-white">{name ?? 'Developer'}</span>.{' '}
							{headline ?? 'I design and build thoughtful web and mobile experiences.'}
						</p>

						{bio && <p className="mt-3 text-sm leading-7 text-white/35">{bio}</p>}
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{
							duration: 0.6,
							delay: 0.35,
						}}
						className="mt-10 flex flex-wrap gap-4">
						<Link
							href="#contact"
							className={cn(
								buttonVariants({
									variant: 'outline',
									size: 'lg',
								}),
								'gap-2.5'
							)}>
							Let&apos;s Talk
							<ArrowUpRight className="ml-2 size-4" />
						</Link>
						<Link
							href="#projects"
							className={cn(
								buttonVariants({
									variant: 'default',
									size: 'lg',
								}),
								'gap-2.5'
							)}>
							View Projects
							<ArrowDownRight className="ml-2 size-4" />
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
