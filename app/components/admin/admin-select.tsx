import type {
    SelectHTMLAttributes,
} from "react";

type Option = {
    label: string;
    value: string;
};

type AdminSelectProps =
    SelectHTMLAttributes<HTMLSelectElement> & {
        label: string;
        options: Option[];
    };

export function AdminSelect({
    label,
    options,
    id,
    name,
    ...props
}: AdminSelectProps) {
    const selectId = id ?? name;

    return (
        <div>
            <label
                htmlFor={selectId}
                className="mb-2 block text-sm font-medium"
            >
                {label}
            </label>

            <select
                id={selectId}
                name={name}
                className="w-full rounded-lg border p-3"
                {...props}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}