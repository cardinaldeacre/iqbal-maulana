'use client';

import type { MouseEvent } from 'react';

export function smoothScroll() {
    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {

        event.preventDefault();

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        window.history.pushState(null, '', targetId);
    }

    return { scrollToSection };
}