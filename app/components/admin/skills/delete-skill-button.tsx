"use client";

import { useTransition } from "react";

import { deleteSkill } from "@/lib/actions/skills";

interface DeleteSkillButtonProps {
    id: string;
}

export function DeleteSkillButton({
    id,
}: DeleteSkillButtonProps) {
    const [isPending, startTransition] =
        useTransition();

    function handleDelete() {
        if (!window.confirm("Delete this skill?")) {
            return;
        }

        startTransition(async () => {
            await deleteSkill(id);
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