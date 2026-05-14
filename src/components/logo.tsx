import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-[1.7rem] font-bold leading-none tracking-normal text-ink"
      aria-label="Pherrix home"
    >
      <span>Pherri</span>
      <svg
        width="22"
        height="30"
        viewBox="0 0 24 36"
        fill="none"
        className="-ml-px translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M4 4C7 8 10 12 12 18C14 12 17 8 20 4"
          stroke="#D97A3E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M4 32C7 28 10 24 12 18C14 24 17 28 20 32"
          stroke="#D97A3E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="10"
          x2="8"
          y2="10"
          stroke="#D97A3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="10"
          x2="20"
          y2="10"
          stroke="#D97A3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14" r="1.5" fill="#D97A3E" />
        <line
          x1="6"
          y1="26"
          x2="8"
          y2="26"
          stroke="#D97A3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="5" cy="22" r="1.5" fill="#D97A3E" />
      </svg>
    </Link>
  );
}
