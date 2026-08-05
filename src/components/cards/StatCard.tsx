import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white/5 p-6 text-center backdrop-blur-sm">
      {icon && (
        <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
          {icon}
        </div>
      )}
      <p className="text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-steel-300">{label}</p>
    </div>
  );
}
