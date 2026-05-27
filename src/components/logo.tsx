import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Pherrix home"
    >
      <img
        src="/assets/pherrix-logo.png"
        alt="Pherrix"
        className="h-auto w-[132px] md:w-[150px]"
      />
    </Link>
  );
}
