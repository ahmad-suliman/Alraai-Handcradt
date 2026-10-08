import { useState } from "react";
import { C, STORE, display, navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b-2 shadow-md"
      style={{ background: C.burnt, color: C.parchment, borderColor: C.sun }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" style={display} className="text-2xl">{STORE.shortName}</a>
        <ul className="hidden gap-8 sm:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-amber-400">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/50 sm:hidden"
        >
          <span className={`h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b-2 shadow-lg sm:hidden"
          style={{ background: C.burnt, borderColor: C.sun }}
        >
          {navLinks.map((l) => (
            <li key={l.href} className="border-t" style={{ borderColor: "rgba(241,224,190,.15)" }}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-lg transition hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}