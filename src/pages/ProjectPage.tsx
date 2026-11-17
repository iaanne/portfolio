import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../data/projects";

export function ProjectPage() {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    document.title = project ? `${project.title} · Ian` : "Proyek tidak ditemukan · Ian";
    return () => {
      document.title = "Ian · Portofolio Sains Data";
    };
  }, [project]);

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="label text-ash">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Proyeknya tidak ada.</h1>
        <p className="mt-3 text-sm text-ink/70">Mungkin tautannya salah atau sudah saya ganti nama.</p>
        <Link to="/" className="btn mt-8 inline-flex bg-butter">
          <ArrowLeft size={14} aria-hidden="true" /> Kembali
        </Link>
      </section>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
      <Link to="/#karya" className="label inline-flex items-center gap-2 hover:underline hover:underline-offset-4">
        <ArrowLeft size={13} aria-hidden="true" /> Semua karya
      </Link>

      <header className="mt-8 border-b-2 border-ink pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip bg-butter">{project.category}</span>
          <span className="chip border-ink/40 bg-paper">{project.year}</span>
          <span className="label ml-auto text-ash">{project.index} / 10</span>
        </div>

        <h1 className="mt-5 text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.04em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">{project.summary}</p>
      </header>

      <div className="mt-8 grid gap-10 sm:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="label text-ash">Yang ada di dalamnya</h2>
          <ol className="mt-4 space-y-4">
            {project.bullets.map((bullet, i) => (
              <li key={bullet} className="flex gap-4 border-b border-ink/15 pb-4">
                <span className="font-mono text-[11px] text-ash">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-ink/85">{bullet}</p>
              </li>
            ))}
          </ol>

          <h2 className="label mt-8 text-ash">Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="card h-fit p-5">
          <p className="label text-ash">Repositori</p>
          <p className="mt-2 break-all font-mono text-xs">{project.repoName}</p>
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn mt-5 w-full justify-between bg-ink text-cream">
            Buka di GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <p className="mt-4 font-mono text-[10px] leading-relaxed text-ash">
            Kode, README, dan riwayat commit ada di sana. Halaman ini ringkasannya.
          </p>
        </aside>
      </div>

      <nav className="mt-14 border-t-2 border-ink pt-6" aria-label="Proyek berikutnya">
        <p className="label text-ash">Berikutnya</p>
        <Link to={`/proyek/${next.slug}`} className="group mt-3 flex items-center justify-between gap-6">
          <span className="text-xl font-bold tracking-tight group-hover:underline group-hover:underline-offset-4 sm:text-2xl">
            {next.title}
          </span>
          <ArrowRight
            size={20}
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </nav>
    </article>
  );
}
