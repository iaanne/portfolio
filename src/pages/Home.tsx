import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { archive } from "../data/archive";
import { projects, type Project } from "../data/projects";
import { Marquee } from "../components/Marquee";
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
          <div className="flex items-start justify-between gap-4">
            <span className="label opacity-70">{project.index}</span>
            <span className="chip bg-cream/70">{project.category}</span>
          </div>

          <h3 className={`mt-5 font-bold tracking-tight ${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className={`mt-3 max-w-xl text-sm leading-relaxed ${project.featured ? "sm:text-base" : ""} opacity-80`}>
            {project.summary}
          </p>
        </div>

        <div className="mt-7">
          <ul className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((item) => (
              <li key={item} className="chip bg-paper/60">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-ink/25 pt-4">
            <span className="font-mono text-[11px] opacity-70">{project.year}</span>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
              Lihat
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:px-8 sm:pt-12">
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <p className="label">Portofolio / 2026</p>
        <p className="label text-ash">Surakarta, ID</p>
      </div>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.65fr_1fr]">
        <div>
          <h1 className="text-[clamp(2.7rem,8vw,6.4rem)] font-bold leading-[0.9] tracking-[-0.045em]">
            Ian membuat
            <br />
            sistem data
            <br />
            dari{" "}
            <mark className="bg-butter px-1 text-inherit [box-decoration-break:clone]">hulu</mark> ke hilir.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Mahasiswa Sains Data Universitas Sebelas Maret. Yang saya kerjakan bergerak dari pipeline
            dan lakehouse sampai dasbor, aplikasi web, dan ontologi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#karya" className="btn bg-ink text-cream">
              Lihat karya <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a href="#tentang" className="btn bg-paper">
              Tentang saya
            </a>
          </div>
        </div>

        <aside className="relative mx-auto w-full max-w-xs lg:mx-0 lg:mt-3">
          <div className="card rotate-2 bg-butter p-5">
            <p className="label flex items-center justify-between">
              Kartu kerja
              <span aria-hidden="true">✳</span>
            </p>

            <p className="mt-5 text-2xl font-bold leading-tight tracking-tight">
              Adrian Farrel
              <br />
              Aziz Yatyoga
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest opacity-70">
              Sains Data · UNS 2024
            </p>

            <dl className="mt-5 space-y-2 border-t border-ink/25 pt-4 font-mono text-[11px]">
              <div className="flex justify-between gap-3">
                <dt className="opacity-60">Fokus</dt>
                <dd className="text-right">Data &amp; web</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="opacity-60">Status</dt>
                <dd className="text-right">Mahasiswa aktif</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="opacity-60">Repo publik</dt>
                <dd className="text-right">36</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto mt-5 w-fit -rotate-3 border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest shadow-[3px_3px_0_0_var(--color-ink)]">
            10 proyek pilihan
          </div>
        </aside>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="karya" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal className="flex flex-col gap-3 border-b-2 border-ink pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label text-ash">01 / Karya pilihan</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Sepuluh proyek yang paling mewakili cara saya bekerja.
          </h2>
        </div>
        <p className="max-w-xs font-mono text-[11px] leading-relaxed text-ash">
          Dipilih dari 36 repo publik. Masing-masing punya halaman berisi ringkasan, isi, dan tautan
          repositori.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={(index % 2) * 70} />
        ))}
      </div>
    </section>
  );
}

function Archive() {
  return (
    <section id="arsip" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">02 / Arsip</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Sisanya, kalau kamu mau menyelam.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
          Latihan kuliah, eksperimen kecil, dan eksperimen yang tidak selesai. Semua tetap publik di
          GitHub.
        </p>
      </Reveal>

      <Reveal as="section" className="mt-6 grid gap-x-10 sm:grid-cols-2">
        <ul className="contents">
          {archive.map((repo) => (
            <li key={repo.name} className="min-w-0 border-b border-ink/20">
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
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

const tools = [
  { group: "Data", items: ["Python", "Pandas", "SQL", "Apache Iceberg", "Azure Data Factory"] },
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI"] },
  { group: "Dasbor", items: ["Streamlit", "Matplotlib", "Pandas"] },
  { group: "Lainnya", items: ["SPARQL", "OWL", "Protégé", "Docker", "Git", "Linux"] },
];

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">03 / Tentang</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Belajar dengan membangun sampai jalan.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-4 text-sm leading-relaxed text-ink/85 sm:text-base">
          <p>
            Saya Adrian, mahasiswa Sains Data di UNS angkatan 2024. Ketertarikan saya ada di titik
            temu data dan antarmuka: data yang sudah bersih, lalu dibuat bisa dibaca orang lain.
          </p>
          <p>
            Sebagian besar proyek di atas adalah kerja kelompok mata kuliah. Peran saya bervariasi,
            dari menyusun lapisan storage dan pipeline, membangun halaman web, sampai merapikan
            ontologi dan menulis chatbot yang jawabannya bisa dilacak.
          </p>
          <p>
            Di luar kelas, saya mengurus desktop Linux sendiri dan sering mengubah tampilannya.
          </p>
        </Reveal>

        <Reveal delay={90} className="card p-6">
          <p className="label text-ash">Perkakas</p>
          <dl className="mt-4 divide-y divide-ink/20">
            {tools.map((tool) => (
              <div key={tool.group} className="grid grid-cols-[92px_1fr] gap-3 py-3">
                <dt className="font-mono text-[10.5px] uppercase tracking-wider text-ash">{tool.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {tool.items.map((item) => (
                    <span key={item} className="chip border-ink/40">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  const facts = [
    { value: "36", label: "Repo publik" },
    { value: "10", label: "Proyek pilihan" },
    { value: "9", label: "Bidang kerja" },
    { value: "2024", label: "Mulai kuliah" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <dl className="grid grid-cols-2 gap-x-6 border-b-2 border-ink sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-row items-baseline gap-3 py-5 sm:flex-col sm:gap-1 sm:border-l-2 sm:border-ink/20 sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
            <dt className="order-2 font-mono text-[10px] uppercase tracking-widest text-ash">{fact.label}</dt>
            <dd className="order-1 text-3xl font-bold tracking-tight sm:text-4xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
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
      <Marquee />
      <Stats />
      <Work />
      <Archive />
      <About />
    </>
  );
}
