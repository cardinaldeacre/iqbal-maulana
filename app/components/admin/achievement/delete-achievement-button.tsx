"use client";

import { useTransition } from "react";

import { deleteAchievement } from "@/lib/actions/achievements";

export function DeleteAchievementButton({
    id,
}: {
    id: string;
}) {
    const [isPending, startTransition] =
        useTransition();

    function handleDelete() {
        if (
            !window.confirm(
                "Delete this achievement?"
            )
        ) {
            return;
        }

        startTransition(async () => {
            await deleteAchievement(id);
        });
    }

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={handleDelete}
            className="text-sm text-red-600"
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
    );
}