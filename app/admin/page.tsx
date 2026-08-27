import {AdminPageHeader, DashboardSummaryCard} from '@/components/admin';

import {getDashboardSummary} from '@/lib/services/dashboard';
import {AdminSidebar} from '../../components/admin/layout/admin-sidebar';

export default async function AdminPage() {
	const summary = await getDashboardSummary();

	return (
		<main className="p-8">
			<AdminPageHeader title="Dashboard" description="Overview of your portfolio content." />

			<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<DashboardSummaryCard label="Projects" value={summary.projects} />

				<DashboardSummaryCard label="Experiences" value={summary.experiences} />

				<DashboardSummaryCard label="Skills" value={summary.skills} />

				<DashboardSummaryCard label="Achievements" value={summary.achievements} />
			</div>
		</main>
	);
}
