import type { InputHTMLAttributes } from "react";

type AdminInputProps =
    InputHTMLAttributes<HTMLInputElement> & {
        label: string;
        error?: string;
    };

export function AdminInput({
    label,
    error,
    id,
    name,
    ...props
}: AdminInputProps) {
    const inputId = id ?? name;

    return (
        <div>
            <label
                htmlFor={inputId}
                className="mb-2 block text-sm font-medium"
            >
                {label}
            </label>

            <input
                id={inputId}
                name={name}
                className="w-full rounded-lg border p-3"
                {...props}
            />

            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}