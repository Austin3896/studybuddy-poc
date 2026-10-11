import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "StudyBuddy" },
      { name: "description", content: "StudyBuddy — a simple study companion proof of concept." },
      { property: "og:title", content: "StudyBuddy" },
      { property: "og:description", content: "StudyBuddy — a simple study companion proof of concept." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl border bg-card p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-card-foreground">StudyBuddy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A simple proof of concept with real sign-in.
        </p>
        <Link
          to="/auth"
          className="mt-6 inline-block w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
