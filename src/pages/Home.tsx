import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { Skills } from "../components/Skills";

const accentClass: Record<Project["accent"], string> = {
  butter: "bg-butter",
  persimmon: "bg-persimmon text-cream",
  sky: "bg-sky",
  pine: "bg-pine text-cream",
  denim: "bg-denim text-cream",
  paper: "bg-paper",
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="card lift flex h-full flex-col overflow-hidden">
        <Link
          to={`/proyek/${project.slug}`}
          className={`flex h-28 items-end justify-between border-b-2 border-ink p-4 ${accentClass[project.accent]}`}
          aria-label={`Buka ${project.title}`}
        >
          <span className="text-4xl font-bold leading-none tracking-tight opacity-80">{project.index}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">{project.year}</span>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="chip bg-cream/70 text-ink">{project.category}</span>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/60 hover:text-persimmon"
            >
              Repo <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>

          <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
            <Link to={`/proyek/${project.slug}`} className="hover:underline hover:underline-offset-4">
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-ink/75">{project.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.length ? (
              project.stack.slice(0, 4).map((item) => (
                <li key={item} className="chip border-ink/40 bg-cream/60">
                  {item}
                </li>
              ))
            ) : (
              <li className="chip border-ink/30 bg-cream/60">Belum ada kode</li>
            )}
          </ul>

          <div className="mt-auto pt-5">
            <Link
              to={`/proyek/${project.slug}`}
              className="btn w-full justify-between bg-cream py-2.5 text-[11px]"
            >
              Lihat proyek <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="beranda" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ash">Halo, aku ian.</p>

      <h1 className="mt-5 max-w-5xl text-pretty text-[clamp(2.25rem,6.2vw,5rem)] font-bold leading-[0.96] tracking-[-0.04em]">
        Sebuah ruang untuk menampilkan capstone selama menyelam di dunia data
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
        Mahasiswa Sains Data di <strong className="font-semibold text-ink">Universitas Sebelas Maret</strong>,
        aku membangun ML model, dan Data pipeline untuk menyelesaikan masalah.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href="#proyek" className="btn bg-persimmon text-cream">
          Lihat proyek <ArrowRight size={14} aria-hidden="true" />
        </a>
        <a
          href="#tentang"
          className="text-sm underline decoration-2 underline-offset-4 hover:text-persimmon"
        >
          Tentang saya
        </a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="proyek" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">Work</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Proyek terpilih</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
          Delapan repo yang paling sering saya buka lagi: pipeline, model, dan aplikasi.
        </p>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={(index % 3) * 70} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="border-b-2 border-ink pb-3">
        <h2 className="text-xl font-bold tracking-tight">Tentang</h2>
      </Reveal>

      <Reveal className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink/85 sm:text-base">
        <p>
          Keseharian saya sebagai mahasiswa selama berkuliah biasanya berputar pada siklus merancang
          arsitektur pipeline, train and test data, serta mempelajari AI agent.
        </p>
        <p>
          Beberapa di atas merupakan proyek teamwork dan aku memegang bagian yang berbeda-beda.
        </p>
        <p>Di luar kuliah aku memakai Linux sehari-hari dan cukup sering mengubah tampilannya.</p>
      </Reveal>
    </section>
  );
}

export function Home() {
  useEffect(() => {
    document.title = "Ian · Portofolio Sains Data";
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <About />
    </>
  );
}
