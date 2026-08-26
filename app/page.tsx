import {About, FeaturedProjects, Hero, Navbar, TechStack} from '@/app/components/portofolio';

import {getPublicPortfolioData} from '@/lib/services/portofolio';
import {ExperienceTimeline} from './components/portofolio/experience-timeline';

export default async function HomePage() {
	const {profile, featuredProjects, experiences, skills, achievements} =
		await getPublicPortfolioData();

	return (
		<main>
			<Navbar name={profile?.name} />

			<Hero name={profile?.name} headline={profile?.headline} bio={profile?.bio} />

			<About bio={profile?.bio} />

			<TechStack skills={skills} />

			<FeaturedProjects projects={featuredProjects} />

			<ExperienceTimeline experiences={experiences} />

			<section id="experience" className="min-h-screen bg-ivory" />

			<section id="achievements" className="min-h-screen bg-sand-light" />

			<section id="contact" className="min-h-screen bg-charcoal" />
		</main>
	);
}
