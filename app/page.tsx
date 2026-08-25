import {About, Hero, Navbar, TechStack} from '@/app/components/portofolio';
import {getPortfolio} from '@/lib/services/portofolio';

export default async function HomePage() {
	const {profile, featuredProjects, experiences, skills, achievements} = await getPortfolio();

	return (
		<main>
			<Navbar name={profile?.name} />

			<Hero name={profile?.name} headline={profile?.headline} bio={profile?.bio} />

			<About bio={profile?.bio} />

			<TechStack skills={skills} />

			<section id="projects" className="min-h-screen bg-graphite" />

			<section id="experience" className="min-h-screen bg-ivory" />

			<section id="achievements" className="min-h-screen bg-sand-light" />

			<section id="contact" className="min-h-screen bg-charcoal" />
		</main>
	);
}
