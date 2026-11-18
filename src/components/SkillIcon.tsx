import { Database } from "lucide-react";

import postgresqlLogo from "../assets/brand/brand-postgresql.svg";
import prefectLogo from "../assets/brand/brand-prefect.svg";
import podmanLogo from "../assets/brand/brand-podman.svg";
import numpyLogo from "../assets/brand/brand-numpy.svg";
import pandasLogo from "../assets/brand/brand-pandas.svg";
import sqlserverLogo from "../assets/brand/brand-sqlserver.svg";
import azureLogo from "../assets/brand/brand-azure.svg";
import fastapiLogo from "../assets/brand/brand-fastapi.svg";
import redisLogo from "../assets/brand/brand-redis.svg";
import sparkLogo from "../assets/brand/brand-apachespark.svg";
import cassandraLogo from "../assets/brand/brand-apachecassandra.svg";
import garageLogo from "../assets/brand/brand-garage.svg";
import neo4jLogo from "../assets/brand/brand-neo4j.svg";
import kafkaLogo from "../assets/brand/brand-apachekafka.svg";
import hadoopLogo from "../assets/brand/brand-apachehadoop.svg";
import pythonLogo from "../assets/brand/brand-python.svg";
import tensorflowLogo from "../assets/brand/brand-tensorflow.svg";
import pytorchLogo from "../assets/brand/brand-pytorch.svg";
import kerasLogo from "../assets/brand/brand-keras.svg";
import scikitlearnLogo from "../assets/brand/brand-scikitlearn.svg";
import opencvLogo from "../assets/brand/brand-opencv.svg";
import tableauLogo from "../assets/brand/brand-tableau.svg";
import powerbiLogo from "../assets/brand/brand-powerbi.svg";
import streamlitLogo from "../assets/brand/brand-streamlit.svg";
import seabornLogo from "../assets/brand/brand-seaborn.svg";
import matplotlibLogo from "../assets/brand/brand-matplotlib.svg";
import excelLogo from "../assets/brand/brand-excel.svg";
import neovimLogo from "../assets/brand/brand-neovim.svg";
import niriLogo from "../assets/brand/brand-niri.svg";
import archlinuxLogo from "../assets/brand/brand-archlinux.svg";
import gitLogo from "../assets/brand/brand-git.svg";

// Logo resmi berwarna: devicons, Simple Icons, Wikimedia, dan repo masing-masing proyek.
const brandImages: Record<string, string> = {
  postgresql: postgresqlLogo,
  prefect: prefectLogo,
  podman: podmanLogo,
  numpy: numpyLogo,
  pandas: pandasLogo,
  sqlserver: sqlserverLogo,
  azure: azureLogo,
  fastapi: fastapiLogo,
  redis: redisLogo,
  apachespark: sparkLogo,
  apachecassandra: cassandraLogo,
  garage: garageLogo,
  neo4j: neo4jLogo,
  apachekafka: kafkaLogo,
  apachehadoop: hadoopLogo,
  python: pythonLogo,
  tensorflow: tensorflowLogo,
  pytorch: pytorchLogo,
  keras: kerasLogo,
  scikitlearn: scikitlearnLogo,
  opencv: opencvLogo,
  tableau: tableauLogo,
  powerbi: powerbiLogo,
  streamlit: streamlitLogo,
  seaborn: seabornLogo,
  matplotlib: matplotlibLogo,
  excel: excelLogo,
  neovim: neovimLogo,
  niri: niriLogo,
  archlinux: archlinuxLogo,
  git: gitLogo,
};

// Sebagian logo punya ruang kosong di kanvasnya, jadi ukurannya dinaikkan agar seimbang.
const brandScale: Record<string, number> = {
  garage: 1.6,
  neo4j: 1.55,
  scikitlearn: 1.3,
  niri: 1.25,
  apachekafka: 1.2,
  pandas: 1.15,
  python: 1.05,
};

// "SQL" adalah nama bahasa, bukan merek, jadi tetap memakai lambang basis data.
const genericIcons: Record<string, typeof Database> = {
  sql: Database,
};

const genericColors: Record<string, string> = {
  sql: "#64748B",
};

export function SkillMark({ name, size = 18, mono = false }: { name: string; size?: number; mono?: boolean }) {
  const image = brandImages[name];

  if (image) {
    const scaled = Math.round(size * (brandScale[name] ?? 1));
    return (
      <img
        src={image}
        width={scaled}
        height={scaled}
        alt=""
        loading="lazy"
        className={`shrink-0 object-contain ${mono ? "grayscale" : ""}`}
      />
    );
  }

  const Icon = genericIcons[name] ?? Database;
  return (
    <span style={{ color: mono ? "currentColor" : (genericColors[name] ?? "currentColor") }} className="inline-flex">
      <Icon size={size} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
    </span>
  );
}
