import { ReactNode } from "react";

export default function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-white shadow-md transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        "active:translate-y-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}