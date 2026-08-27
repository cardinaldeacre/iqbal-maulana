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
            className="
        rounded-lg px-3 py-2 text-sm font-medium
        text-red-600 transition
        hover:bg-red-50
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
    );
}