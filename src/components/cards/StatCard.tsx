import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {icon && (
        <div className="relative mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
      )}
      <p className="relative text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="relative mt-2 text-sm text-steel-300">{label}</p>
    </div>
  );
}
