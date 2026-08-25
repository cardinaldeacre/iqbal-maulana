import type {
    InputHTMLAttributes,
} from "react";

type AdminFileInputProps =
    InputHTMLAttributes<HTMLInputElement> & {
        label: string;
    };

export function AdminFileInput({
    label,
    name,
    ...props
}: AdminFileInputProps) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type="file"
                {...props}
            />
        </div>
    );
}