export type SkillGroup = {
  title: string;
  items: { icon: string; label: string }[];
};

export const skillGroups: SkillGroup[] = [
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
      { icon: "niri", label: "Niri" },
      { icon: "archlinux", label: "Arch Linux" },
      { icon: "git", label: "Git" },
    ],
  },
];

export const skillIcons = skillGroups.flatMap((group) => group.items.map((item) => item.icon));

// Urutan untuk ikon yang melayang di hero, diselang dari tiap kategori.
export const heroIcons = [
  "python",
  "postgresql",
  "apachespark",
  "tensorflow",
  "apachekafka",
  "neovim",
  "redis",
  "scikitlearn",
  "archlinux",
  "pandas",
  "pytorch",
  "neo4j",
  "streamlit",
  "git",
  "numpy",
];
