import { Link } from "react-router-dom";

const links = [
  { href: "/#karya", label: "Karya" },
  { href: "/#arsip", label: "Arsip" },
  { href: "/#tentang", label: "Tentang" },
];
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Ian, ke beranda">
          <span className="text-2xl font-bold tracking-tight">ian</span>
          <span className="inline-block size-2.5 -translate-y-0.5 rotate-45 bg-persimmon transition-transform group-hover:rotate-[135deg]" />
        </Link>

        <nav className="hidden items-center gap-7 sm:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="label hover:underline hover:decoration-2 hover:underline-offset-4">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/iaanne"
          target="_blank"
          rel="noreferrer"
          className="label flex items-center gap-2 border-2 border-ink bg-paper px-3 py-2 shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
