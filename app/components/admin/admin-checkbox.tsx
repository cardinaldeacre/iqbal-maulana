import type {
    InputHTMLAttributes,
} from "react";

type AdminCheckboxProps =
    InputHTMLAttributes<HTMLInputElement> & {
        label: string;
    };

export function AdminCheckbox({
    label,
    name,
    ...props
}: AdminCheckboxProps) {
    return (
        <label className="flex items-center gap-3">
            <input
                name={name}
                type="checkbox"
                {...props}
            />

            <span>{label}</span>
        </label>
    );
}