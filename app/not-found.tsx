import { routing } from "@/i18n/routing";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <p className="text-9xl text-muted-foreground">404</p>
        <h1 className="text-2xl font-medium">Page not found</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
      </div>
      <Link
        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
        href={`/${routing.defaultLocale}`}
      >
        Back to homepage
      </Link>
    </main>
  );
}
