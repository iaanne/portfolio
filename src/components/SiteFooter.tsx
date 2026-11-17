export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="label text-butter">Kontak</p>
            <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
              Mari
              <br />
              ngobrol.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              Untuk magang, proyek data, atau kerja sama kecil, cara tercepat menghubungi saya lewat
              GitHub atau Instagram.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/iaanne"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-2 border-cream/30 px-4 py-3 transition-colors hover:border-butter hover:bg-butter hover:text-ink"
            >
              <span className="label">GitHub</span>
              <span className="font-mono text-xs">@iaanne ↗</span>
            </a>
            <a
              href="https://instagram.com/iannfr__"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-2 border-cream/30 px-4 py-3 transition-colors hover:border-butter hover:bg-butter hover:text-ink"
            >
              <span className="label">Instagram</span>
              <span className="font-mono text-xs">@iannfr__ ↗</span>
            </a>
            <a
              href="https://github.com/iaanne?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-2 border-cream/30 px-4 py-3 transition-colors hover:border-butter hover:bg-butter hover:text-ink"
            >
              <span className="label">Semua repo</span>
              <span className="font-mono text-xs">36 repo ↗</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/20 pt-6 font-mono text-[11px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adrian Farrel Aziz Yatyoga</p>
          <p>React · Vite · Tailwind · dibuat di Surakarta</p>
        </div>
      </div>
    </footer>
  );
}
