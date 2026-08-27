"use client";

import { useTransition } from "react";

import { deleteProject } from "@/lib/actions/projects";

interface DeleteProjectButtonProps {
    id: string;
}

export function DeleteProjectButton({
    id,
}: DeleteProjectButtonProps) {
    const [isPending, startTransition] =
        useTransition();

    function handleDelete() {
        const confirmed = window.confirm(
            "Delete this project?"
        );

        if (!confirmed) {
            return;
        }

        startTransition(async () => {
            await deleteProject(id);
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