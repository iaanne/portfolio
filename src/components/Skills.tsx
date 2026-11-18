import { useState } from "react";
import { Reveal } from "./Reveal";
import { SkillMark } from "./SkillIcon";
import { skillGroups as groups } from "../data/skills";

const tabs = ["Semua", ...groups.map((group) => group.title)];

export function Skills() {
  const [active, setActive] = useState("Semua");
  const visible = active === "Semua" ? groups : groups.filter((group) => group.title === active);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="border-b-2 border-ink pb-5">
        <p className="label text-ash">Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; tools</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
          Perangkat yang saya pakai untuk mengolah data, membangun pipeline, dan melatih model.
        </p>
      </Reveal>

      <Reveal delay={60} className="mt-6 grid w-full max-w-3xl grid-cols-3 gap-2 lg:mx-auto lg:max-w-5xl lg:grid-cols-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={`flex h-[3.75rem] items-center justify-center border-2 border-ink px-2 py-2 text-center font-mono text-[9.5px] uppercase leading-snug tracking-[0.08em] transition-colors sm:text-[10.5px] lg:whitespace-nowrap ${
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
