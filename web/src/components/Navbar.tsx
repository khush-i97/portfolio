"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { id: string; label: string };

export default function Navbar() {
  const navItems: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.65] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  const linkClass = (id: string) =>
    `text-sm md:text-[13px] font-medium transition ${
      activeId === id
        ? "text-fuchsia-700"
        : "text-slate-700 hover:text-fuchsia-700"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="w-full border-b border-white/30 bg-white/70 backdrop-blur-md">
        <div className="container flex items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-[15px] md:text-base font-extrabold tracking-tight text-fuchsia-700"
          >
            DS Portfolio
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur-md">
            <div className="container px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}