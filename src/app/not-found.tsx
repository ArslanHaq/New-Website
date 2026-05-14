import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ember">
        404
      </p>
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        The page you are looking for is unavailable or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-marine"
      >
        Return home
      </Link>
    </section>
  );
}
