import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { archive } from "../data/archive";
import { projects, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";

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
    <Reveal delay={delay} className={project.featured ? "md:col-span-2" : ""}>
      <Link
        to={`/proyek/${project.slug}`}
        className={`card lift group flex h-full flex-col justify-between p-6 sm:p-7 ${accentClass[project.accent]}`}
      >
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="chip bg-cream/70 text-ink">{project.category}</span>
            <span className="font-mono text-[11px] opacity-60">{project.year}</span>
          </div>

          <h3 className={`mt-5 font-bold tracking-tight ${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className={`mt-3 max-w-xl text-sm leading-relaxed ${project.featured ? "sm:text-base" : ""} opacity-80`}>
            {project.summary}
          </p>
        </div>

        <div className="mt-7 flex items-end justify-between gap-4 border-t border-ink/25 pt-4">
          <p className="font-mono text-[11px] leading-relaxed opacity-70">
            {project.stack.slice(0, 4).join(" · ")}
          </p>
          <ArrowRight
            size={15}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-ink pb-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Adrian Farrel Aziz Yatyoga</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ash">Surakarta</p>
      </div>

      <h1 className="mt-12 max-w-5xl text-[clamp(2.5rem,7vw,5.6rem)] font-bold leading-[0.94] tracking-[-0.04em]">
        Python untuk data, TypeScript untuk halaman web.
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
        Mahasiswa Sains Data UNS angkatan 2024. Kebanyakan yang ada di sini berawal dari tugas kuliah
        yang tumbuh jadi proyek: pipeline Azure, lakehouse Iceberg, dasbor Streamlit, dan beberapa
        aplikasi Next.js.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href="#karya" className="btn bg-persimmon text-cream">
          Lihat karya <ArrowRight size={14} aria-hidden="true" />
        </a>
        <a
          href="#tentang"
          className="text-sm underline decoration-2 underline-offset-4 hover:text-persimmon"
        >
          Tentang saya
        </a>
      </div>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
        36 repo publik · 10 proyek pilihan · semester 5
      </p>
    </section>
  );
}

function Work() {
  return (
    <section id="karya" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Karya</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">10 dari 36 repo</p>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={(index % 2) * 70} />
        ))}
      </div>
    </section>
  );
}

function Archive() {
  return (
    <section id="arsip" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <h2 className="text-xl font-bold tracking-tight">Arsip</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
          {archive.length} repo lain
        </p>
      </Reveal>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/75">
        Latihan kelas, eksperimen kecil, dan beberapa yang berhenti di tengah jalan. Semuanya masih
        publik.
      </p>

      <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
        {archive.map((repo) => (
          <div key={repo.name} className="min-w-0 border-b border-ink/15">
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 py-2.5 hover:bg-butter/60"
            >
              <span className="min-w-0 flex-1 truncate font-mono text-xs">{repo.name}</span>
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-ash sm:inline">
                {repo.language}
              </span>
              <span className="font-mono text-[10px] text-ash">{repo.year}</span>
              <ArrowUpRight
                size={13}
                aria-hidden="true"
                className="shrink-0 opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <h2 className="text-xl font-bold tracking-tight">Tentang</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">UNS · 2024</p>
      </Reveal>

      <Reveal className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink/85 sm:text-base">
        <p>
          Saya Adrian, mahasiswa Sains Data di UNS. Pekerjaan saya biasanya berhenti di dua tempat:
          pipeline yang menyiapkan data, dan halaman yang menampilkannya.
        </p>
        <p>
          Hampir semua proyek di atas adalah tugas kelompok. Bagian saya berbeda-beda, dari menyusun
          storage dan pipeline, membangun frontend, merapikan ontologi, sampai menulis chatbot yang
          jawabannya diambil dari hasil query, bukan dari model bahasa.
        </p>
        <p>
          Di luar kuliah saya memakai Linux sehari-hari dan cukup sering mengubah tampilannya. Repo
          yang belum selesai tetap saya biarkan publik supaya kelihatan prosesnya.
        </p>
        <p className="pt-2 font-mono text-[11px] leading-relaxed text-ash">
          Sering dipakai: Python, Pandas, SQL, Apache Iceberg, Azure Data Factory, Next.js, React,
          TypeScript, Tailwind, FastAPI, Streamlit. Untuk ontologi: Protégé, SPARQL.
        </p>
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
      <Work />
      <Archive />
      <About />
    </>
  );
}
