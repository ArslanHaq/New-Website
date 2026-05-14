export type IconName =
  | "activity"
  | "arrow"
  | "chart"
  | "check"
  | "dna"
  | "external"
  | "flask"
  | "grid"
  | "heartbeat"
  | "lock"
  | "mail"
  | "network"
  | "shield"
  | "sparkles"
  | "target"
  | "trending"
  | "trophy"
  | "user"
  | "users";

export type NavItem = {
  label: string;
  href: string;
};

export type PageHero = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ContentCard = {
  title: string;
  description: string;
  icon?: IconName;
};
