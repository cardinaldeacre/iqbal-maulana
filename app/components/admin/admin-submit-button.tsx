type AdminSubmitButtonProps = {
    children: React.ReactNode;
};

export function AdminSubmitButton({
    children,
}: AdminSubmitButtonProps) {
    return (
        <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white"
        >
            {children}
        </button>
    );
}