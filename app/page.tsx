import {
	About,
	Contact,
	FeaturedProjects,
	Hero,
	Navbar,
	TechStack,
	Footer,
} from '@/components/portofolio';

import {getPublicPortfolioData} from '@/lib/services/portofolio';
import {ExperienceTimeline} from '../components/portofolio/experience-timeline';

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

			<Contact
				email={profile?.email}
				githubUrl={profile?.github_url}
				linkedinUrl={profile?.linkedin_url}
			/>

			<Footer
				name={profile?.name}
				githubUrl={profile?.github_url}
				linkedinUrl={profile?.linkedin_url}
			/>
		</main>
	);
}
