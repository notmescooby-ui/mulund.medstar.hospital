import {
  Bone, Ribbon, HeartPulse, Brain, Activity, Ear, Eye, Scissors,
  Sparkles, Baby, Flower2, Droplets, Waves, Siren, Dumbbell, Stethoscope,
  PersonStanding, Zap,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Bone, Ribbon, HeartPulse, Brain, Activity, Ear, Eye, Scissors,
  Sparkles, Baby, Flower2, Droplets, Waves, Siren, Dumbbell, Stethoscope,
  PersonStanding, Zap,
};

export function DepartmentIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Stethoscope;
  return <Icon className={className} />;
}