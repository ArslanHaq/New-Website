import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Dna,
  ExternalLink,
  FlaskConical,
  Grid3X3,
  HeartPulse,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  User,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/lib/types";

const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  activity: Activity,
  arrow: ArrowRight,
  chart: BarChart3,
  check: CheckCircle2,
  dna: Dna,
  external: ExternalLink,
  flask: FlaskConical,
  grid: Grid3X3,
  heartbeat: HeartPulse,
  lock: LockKeyhole,
  mail: Mail,
  network: Network,
  shield: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  trophy: Trophy,
  user: User,
  users: Users,
};

type AppIconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function AppIcon({ name, ...props }: AppIconProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" {...props} />;
}
