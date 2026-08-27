import {AdminMobileNav} from './admin-mobile-nav';

export function AdminMobileHeader() {
	return (
		<header
			className="
                sticky top-0 z-40
                flex h-16 items-center justify-between
                border-b border-white/10
                bg-charcoal/90
                px-4
                backdrop-blur-xl
                lg:hidden
            ">
			<div>
				<p className="text-sm font-semibold text-white">Portfolio Admin</p>

				<p className="text-[11px] text-white/40">Dashboard</p>
			</div>

			<AdminMobileNav />
		</header>
	);
}
