import type {ReactNode} from 'react';

import {AdminMobileHeader} from './admin-mobile-header';
import {AdminSidebar} from './admin-sidebar';

type AdminShellProps = {
	children: ReactNode;
};

export function AdminShell({children}: AdminShellProps) {
	return (
		<div className="min-h-screen bg-charcoal text-white">
			<div className="flex min-h-screen">
				<div className="hidden lg:block">
					<AdminSidebar />
				</div>

				<div className="min-w-0 flex-1">
					<AdminMobileHeader />

					{children}
				</div>
			</div>
		</div>
	);
}
