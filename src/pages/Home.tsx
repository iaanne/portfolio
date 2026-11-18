import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Briefcase, FlaskConical, GraduationCap } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { Skills } from "../components/Skills";
import { SkillDrift } from "../components/SkillDrift";
import profilePhoto from "../assets/profile.jpg";

const accentClass: Record<Project["accent"], string> = {
  butter: "bg-butter",
  persimmon: "bg-persimmon text-cream",
  sky: "bg-sky",
  pine: "bg-pine text-cream",
  denim: "bg-denim text-cream",
  paper: "bg-paper",
};

const experience = [
  {
    period: "November 2026",
    role: "Lexa AI Frontend Tester",
    org: "UNS",
    desc: "Melakukan test script Lexa AI hukum milik Nabawi Tech berbasis FSD untuk penelitian RG DIKE dengan parameter tertentu, untuk mengecek apakah fungsionalitas dan non fungsionalitas pass atau failed.",
    icon: Briefcase,
  },
  {
    period: "September - Oktober 2026",
    role: "Grup Riset dan Penelitian",
    org: "RG DIKE",
    desc: "Asistensi mengajar penelitian RG DIKE dengan membuat modul guru serta melakukan pembelajaran Open Source Software (OSS) di MI Cawan Klaten.",
    icon: FlaskConical,
  },
  {
    period: "Juli - Desember 2025",
    role: "Asisten Praktikum Dasar Pemrograman",
    org: "UNS",
    desc: "Melakukan asistensi pembelajaran praktikum Dasar Pemrograman dengan Python dan beberapa library, membantu memperkuat dasar logika pemrograman.",
    icon: GraduationCap,
  },
];

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
    <section
      id="beranda"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl scroll-mt-20 flex-col justify-center overflow-hidden px-5 py-12 sm:px-8 sm:py-14"
    >
      <SkillDrift />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
      <figure className="order-first mx-auto w-full max-w-[128px] sm:max-w-[160px] lg:max-w-[176px]">
        <div className="border-2 border-ink bg-paper p-1.5 shadow-[5px_5px_0_0_var(--color-ink)] lg:p-2 lg:shadow-[8px_8px_0_0_var(--color-ink)]">
          <img
            src={profilePhoto}
            width={640}
            height={800}
            alt="Ian, mahasiswa Sains Data Universitas Sebelas Maret"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </figure>

      <div className="w-full text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ash">Halo, aku ian.</p>

      <h1 className="mx-auto mt-5 max-w-4xl text-pretty text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[0.96] tracking-[-0.04em]">
        Sebuah ruang untuk menampilkan capstone selama menyelam di dunia data
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
        Mahasiswa Sains Data di <strong className="font-semibold text-ink">Universitas Sebelas Maret</strong>,
        aku membangun Machine Learning dan Deeplearning model serta Data Pipeline untuk menyelesaikan masalah.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
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
      </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="pengalaman" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-14 sm:py-24">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">Journey</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Pengalaman</h2>
      </Reveal>

      <ol className="relative mt-4">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.role} className="border-b border-ink/15 last:border-b-0">
              <Reveal delay={index * 70} className="relative flex gap-5 py-7">
                {index < experience.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-5 top-12 -bottom-12 w-0.5 -translate-x-1/2 bg-ink/20"
                  />
                ) : null}
                <span className="relative z-10 mt-1 flex size-10 shrink-0 items-center justify-center border-2 border-ink bg-paper text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                </span>

                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ash">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink/75">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">{item.desc}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section id="proyek" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-14 sm:py-24">
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
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-14 sm:py-24">
      <Reveal className="border-b-2 border-ink pb-3 text-center">
        <h2 className="text-xl font-bold tracking-tight">Tentang</h2>
      </Reveal>

      <Reveal className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-sm leading-relaxed text-ink/85 sm:text-base">
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
      <Experience />
      <Work />
      <About />
    </>
  );
}
