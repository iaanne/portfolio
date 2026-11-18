import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#beranda", label: "Beranda" },
  { href: "/#skills", label: "Skills" },
  { href: "/#pengalaman", label: "Pengalaman" },
  { href: "/#proyek", label: "Proyek" },
  { href: "/#tentang", label: "Tentang" },
  { href: "/#kontak", label: "Kontak" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Ian, ke beranda">
          <span className="text-2xl font-bold tracking-tight">ianporto</span>
          <span className="inline-block size-2.5 -translate-y-0.5 rotate-45 bg-persimmon transition-transform group-hover:rotate-[135deg]" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="label hover:text-persimmon hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/iaanne"
            target="_blank"
            rel="noreferrer"
            className="label hidden items-center gap-2 border-2 border-ink bg-paper px-3 py-2 shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:flex"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-hp"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex size-10 items-center justify-center border-2 border-ink bg-paper shadow-[3px_3px_0_0_var(--color-ink)] lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-hp" className="border-t-2 border-ink bg-cream px-5 pb-6 pt-1 lg:hidden">
          <nav aria-label="Navigasi utama versi ponsel">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-ink/20 py-3 font-mono text-[11px] uppercase tracking-[0.14em]"
                  >
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://github.com/iaanne"
            target="_blank"
            rel="noreferrer"
            className="label mt-4 inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-2 shadow-[3px_3px_0_0_var(--color-ink)]"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : null}
    </header>
  );
}
