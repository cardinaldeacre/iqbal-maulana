import {redirect} from 'next/navigation';

import {AdminShell} from '@/components/admin/layout/admin-shell';
import {isAdmin} from '@/lib/auth/admin';

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const admin = await isAdmin();

	if (!admin) {
		redirect('/login');
	}

	return <AdminShell>{children}</AdminShell>;
}
