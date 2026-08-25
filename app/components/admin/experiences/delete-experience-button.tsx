"use client";

import { useTransition } from "react";

import { deleteExperience } from "@/lib/actions/experiences";

interface DeleteExperienceButtonProps {
    id: string;
}

export function DeleteExperienceButton({
    id,
}: DeleteExperienceButtonProps) {
    const [isPending, startTransition] =
        useTransition();

    function handleDelete() {
        const confirmed = window.confirm(
            "Delete this experience?"
        );

        if (!confirmed) {
            return;
        }

        startTransition(async () => {
            await deleteExperience(id);
        });
    }

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={handleDelete}
            className="text-sm text-red-600 disabled:opacity-50"
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
    );
}