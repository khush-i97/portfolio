import type { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        // global spacing + anchor offset
        "scroll-mt-24 px-5 sm:px-6",
        "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className={clsx("mx-auto max-w-6xl", innerClassName)}>{children}</div>
    </section>
  );
}