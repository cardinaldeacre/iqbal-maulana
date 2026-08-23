import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth/admin";

export default async function LoginPage() {
    const admin = await isAdmin();

    if (admin) {
        redirect("/admin");
    }

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl border p-8">
                <h1 className="text-2xl font-bold">
                    Admin Login
                </h1>

                <p className="mt-2 text-sm text-neutral-500">
                    Sign in to manage portfolio content.
                </p>

                <a
                    href="/auth/google"
                    className="mt-6 block rounded-lg bg-black px-4 py-3 text-center text-white"
                >
                    Continue with Google
                </a>
            </div>
        </main>
    );
}