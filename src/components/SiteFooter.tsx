const links = [
  { href: "https://github.com/iaanne", label: "github.com/iaanne" },
  { href: "https://www.linkedin.com/in/adrianyatyoga", label: "linkedin.com/adrianyatyoga" },
  { href: "https://instagram.com/iannfr__", label: "instagram.com/iannfr__" },
];

export function SiteFooter() {
  return (
    <footer id="kontak" className="scroll-mt-20 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Kontak</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              Saya saat ini terbuka untuk internship dan opportunity di bidang data science, machine
              learning, dan AI. Jangan ragu untuk menghubungi saya.
            </p>
          </div>

          <ul className="flex flex-col gap-2 font-mono text-xs sm:items-end">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-cream/30 underline-offset-4 hover:text-butter hover:decoration-butter"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-cream/20 pt-5 font-mono text-[11px] text-cream/50">
          © {new Date().getFullYear()} Adrian Farrel Aziz Yatyoga
        </p>
      </div>
    </footer>
  );
}
