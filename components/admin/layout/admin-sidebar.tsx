import {adminNavigation} from './admin-navigation';
import {AdminNavLink} from './admin-nav-link';

export function AdminSidebar() {
	return (
		<aside
			className="
				sticky top-0 z-40
                flex min-h-screen w-64 shrink-0 flex-col
                border-r border-gold/20
                bg-charcoal p-5
                shadow-[1px_0_0_rgba(179,145,82,0.08)]
                ">
			<div>
				<div className="mb-8">
					<p className="text-lg font-bold text-white">Portfolio Admin</p>

					<p className="mt-1 text-xs text-white/45">Content management</p>
				</div>

				<nav className="space-y-1">
					{adminNavigation.map((item) => (
						<AdminNavLink key={item.href} {...item} />
					))}
				</nav>
			</div>

			<div className="mt-auto border-t border-white/10 pt-5">
				<a
					href="/"
					className="
                        block rounded-xl px-3 py-2
                        text-sm font-medium text-white/60
                        transition
                        hover:bg-white/5 hover:text-white
                    ">
					View Portfolio
				</a>

				<a
					href="/auth/logout"
					className="
                        mt-1 block rounded-xl px-3 py-2
                        text-sm font-medium text-red-400
                        transition
                        hover:bg-red-500/10 hover:text-red-300
                    ">
					Logout
				</a>
			</div>
		</aside>
	);
}
