import type {
    TextareaHTMLAttributes,
} from "react";

type AdminTextareaProps =
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        label: string;
        error?: string;
    };

export function AdminTextarea({
    label,
    error,
    id,
    name,
    ...props
}: AdminTextareaProps) {
    const textareaId = id ?? name;

    return (
        <div>
            <label
                htmlFor={textareaId}
                className="mb-2 block text-sm font-medium"
            >
                {label}
            </label>

            <textarea
                id={textareaId}
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