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
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <p className="font-mono text-[11px] text-ash">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Halaman ini tidak ada.</h1>
        <p className="mt-3 text-sm text-ink/70">Tautannya mungkin salah, atau proyeknya sudah saya ganti nama.</p>
        <Link to="/#karya" className="mt-8 inline-flex items-center gap-2 text-sm underline decoration-2 underline-offset-4">
          <ArrowLeft size={14} aria-hidden="true" /> Kembali ke karya
        </Link>
      </section>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        to="/#karya"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ash hover:text-ink"
      >
        <ArrowLeft size={13} aria-hidden="true" /> Semua karya
      </Link>

      <header className="mt-8">
        <h1 className="text-[clamp(2.3rem,6.5vw,4rem)] font-bold leading-[0.98] tracking-[-0.04em]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">{project.summary}</p>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
          {project.category} · {project.year}
        </p>
      </header>

      <div className="mt-9 border-t-2 border-ink pt-6">
        <ul className="space-y-4">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 bg-persimmon" />
              <p className="text-sm leading-relaxed text-ink/85 sm:text-base">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 font-mono text-[11px] leading-relaxed text-ash">
        Stack: {project.stack.join(", ")}
      </p>

      <div className="mt-8">
        <a href={project.repo} target="_blank" rel="noreferrer" className="btn bg-persimmon text-cream">
          Buka repo di GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <nav className="mt-14 border-t-2 border-ink pt-5" aria-label="Proyek berikutnya">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">Proyek berikutnya</p>
        <Link to={`/proyek/${next.slug}`} className="group mt-2 flex items-center justify-between gap-6">
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
