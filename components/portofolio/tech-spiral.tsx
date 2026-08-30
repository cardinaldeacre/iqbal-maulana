'use client';

import InfiniteSpiral, {type InfiniteSpiralItem} from '@/components/react-bits/infinite-spiral';

type Skill = {
	id: string;
	name: string;
	category: string | null;
	icon_url: string | null;
};

type TechSpiralProps = {
	skills: Skill[];
};

export function TechSpiral({skills}: TechSpiralProps) {
	const items: InfiniteSpiralItem[] = skills
		.filter((skill) => skill.icon_url)
		.map((skill) => ({
			id: skill.id,
			src: skill.icon_url!,
			alt: `${skill.name} icon`,
			label: skill.name,
		}));

	if (items.length === 0) {
		return null;
	}

	return (
		<div
			className="
        relative
        h-110 w-full
        sm:h-125
        lg:h-140
      ">
			<InfiniteSpiral
				items={items}
				direction="up"
				animationMode="auto"
				speed={0.45}
				radius={160}
				cardWidth={82}
				cardHeight={82}
				verticalSpacing={62}
				perspective={1000}
				cardsPerTurn={6}
				rotation={0}
				cardTilt={0}
				cardRadius={18}
				centerScale={1.2}
				edgeFade={0.35}
				edgeBlur={4}
				pauseOnHover
				imageFit="contain"
				grayscale={0}
				className="h-full"
			/>
		</div>
	);
}
