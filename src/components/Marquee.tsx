const items = [
  "Data engineering",
  "Lakehouse",
  "Azure",
  "Dasbor",
  "Web",
  "Ontologi",
  "Computer vision",
  "Container",
];

export function Marquee() {
  const row = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee overflow-hidden border-y-2 border-ink bg-ink py-3 text-cream">
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, index) => (
              <span key={`${copy}-${index}`} className="label flex items-center whitespace-nowrap">
                <span className="px-5 opacity-90">{item}</span>
                <span className="text-butter">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">
        Bidang yang saya kerjakan: data engineering, lakehouse, Azure, dasbor, web, ontologi, computer
        vision, dan container.
      </p>
    </div>
  );
}
