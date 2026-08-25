"use client";

import { useTransition } from "react";

type AdminDeleteButtonProps = {
    onDelete: () => Promise<void>;
    confirmMessage?: string;
};

export function AdminDeleteButton({
    onDelete,
    confirmMessage = "Delete this item?",
}: AdminDeleteButtonProps) {
    const [isPending, startTransition] =
        useTransition();

    function handleDelete() {
        if (!window.confirm(confirmMessage)) {
            return;
        }

        startTransition(async () => {
            await onDelete();
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