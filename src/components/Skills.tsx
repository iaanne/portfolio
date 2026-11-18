import { useState } from "react";
import { Reveal } from "./Reveal";
import { SkillMark } from "./SkillIcon";

const groups: { title: string; items: { icon: string; label: string }[] }[] = [
  {
    title: "Data & pipeline",
    items: [
      { icon: "postgresql", label: "PostgreSQL" },
      { icon: "prefect", label: "Prefect" },
      { icon: "podman", label: "Podman" },
      { icon: "numpy", label: "NumPy" },
      { icon: "sqlserver", label: "SQL Server" },
      { icon: "pandas", label: "Pandas" },
      { icon: "adf", label: "Azure Data Factory" },
      { icon: "sql", label: "SQL" },
    ],
  },
  {
    title: "Big data",
    items: [
      { icon: "redis", label: "Redis" },
      { icon: "apachespark", label: "Spark" },
      { icon: "apachecassandra", label: "Cassandra" },
      { icon: "garage", label: "Garage" },
      { icon: "neo4j", label: "Neo4j" },
      { icon: "apachekafka", label: "Kafka" },
    ],
  },
  {
    title: "Machine learning",
    items: [
      { icon: "python", label: "Python" },
      { icon: "tensorflow", label: "TensorFlow" },
      { icon: "pytorch", label: "PyTorch" },
      { icon: "scikitlearn", label: "scikit-learn" },
      { icon: "cnn", label: "CNN" },
    ],
  },
  {
    title: "Visualization",
    items: [
      { icon: "tableau", label: "Tableau" },
      { icon: "powerbi", label: "Power BI" },
      { icon: "streamlit", label: "Streamlit" },
      { icon: "excel", label: "Excel" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "neovim", label: "Neovim" },
      { icon: "git", label: "Git" },
    ],
  },
];

const tabs = ["Semua", ...groups.map((group) => group.title)];

export function Skills() {
  const [active, setActive] = useState("Semua");
  const visible = active === "Semua" ? groups : groups.filter((group) => group.title === active);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; tools</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
          Perangkat yang saya pakai untuk mengolah data, membangun pipeline, dan melatih model.
        </p>
      </Reveal>

      <Reveal delay={60} className="mt-6 flex w-fit max-w-full flex-wrap border-2 border-ink bg-paper">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={`border-r-2 border-ink px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] transition-colors last:border-r-0 ${
              active === tab ? "bg-ink text-cream" : "hover:bg-butter"
            }`}
          >
            {tab}
          </button>
        ))}
      </Reveal>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {visible.flatMap((group) =>
          group.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-2.5 border-2 border-ink bg-paper px-2 py-4 text-center shadow-[3px_3px_0_0_var(--color-ink)]"
            >
              <span className="text-ink/80">
                <SkillMark name={item.icon} size={26} />
              </span>
              <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.06em]">
                {item.label}
              </span>
            </div>
          )),
        )}
      </div>
    </section>
  );
}
