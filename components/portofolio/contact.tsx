'use client';

import Link from 'next/link';
import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import Image from 'next/image';

import {Button, buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';

type ContactProps = {
	email?: string | null;
	githubUrl?: string | null;
	linkedinUrl?: string | null;
};

export function Contact({email, githubUrl, linkedinUrl}: ContactProps) {
	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-charcoal py-28 text-white sm:py-36">
			<motion.div
				className="
                    pointer-events-none
                    absolute -right-24 top-1/2
                    h-96 w-96
                    -translate-y-1/2
                    rounded-full
                    bg-gold/10
                    blur-3xl
                    "
				animate={{
					scale: [1, 1.08, 1],
					x: [0, -20, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<motion.div
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 0.25,
					}}
					transition={{
						duration: 0.75,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="max-w-5xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-light">
						Let&apos;s Work Together
					</p>

					<h2
						className="
                            mt-6 max-w-5xl
                            text-5xl font-bold
                            tracking-tighter
                            sm:text-6xl
                            lg:text-8xl
                            ">
						Have something worth
						<span className="block text-gold-light">building?</span>
					</h2>

					<p className="mt-7 max-w-2xl text-lg leading-8 text-white/45">
						Whether it&apos;s a product, an application, or simply an interesting idea, I&apos;m
						always open to a good conversation.
					</p>

					<div className="mt-10 flex flex-wrap gap-3">
						{email && (
							<Link
								href={`mailto:${email}`}
								className={cn(
									buttonVariants({
										variant: 'default',
										size: 'lg',
									}),
									'gap-2.5'
								)}>
								<Image src="/icons/gmail.svg" alt="" width={16} height={16} className="size-4" />

								<span>Say Hello</span>
							</Link>
						)}

						{githubUrl && (
							<Link
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({
										variant: 'outline',
										size: 'lg',
									}),
									'gap-2.5'
								)}>
								<Image src="/icons/github.svg" alt="" width={16} height={16} className="size-4" />

								<span>GitHub</span>
							</Link>
						)}

						{linkedinUrl && (
							<Link
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({
										variant: 'outline',
										size: 'lg',
									}),
									'gap-2.5'
								)}>
								<Image src="/icons/linkedin.svg" alt="" width={16} height={16} className="size-4" />

								<span>LinkedIn</span>

								<ArrowUpRight className="size-3.5 opacity-60" />
							</Link>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
