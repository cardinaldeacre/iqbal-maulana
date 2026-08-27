'use client';

import {Menu} from 'lucide-react';

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';

import {adminNavigation} from './admin-navigation';
import {AdminNavLink} from './admin-nav-link';

export function AdminMobileNav() {
	return (
		<div className="lg:hidden">
			<Sheet>
				<SheetTrigger
					className="
                        inline-flex size-10
                        items-center justify-center
                        rounded-xl
                        border border-white/10
                        bg-white/5
                        text-white
                        transition
                        hover:bg-white/10
                    ">
					<Menu className="size-5" />
				</SheetTrigger>

				<SheetContent
					side="left"
					className="
                        w-70
                        border-r border-gold/20
                        bg-charcoal
                        p-0
                        text-white
                    ">
					<div className="flex h-full flex-col p-5">
						<SheetHeader className="text-left">
							<SheetTitle className="text-white">Portfolio Admin</SheetTitle>

							<p className="text-xs text-white/45">Content management</p>
						</SheetHeader>

						<nav className="mt-8 space-y-1">
							{adminNavigation.map((item) => (
								<AdminNavLink key={item.href} {...item} />
							))}
						</nav>

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
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
