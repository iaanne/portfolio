export type Project = {
  slug: string;
  index: string;
  title: string;
  repoName: string;
  category: string;
  year: string;
  accent: "butter" | "persimmon" | "sky" | "pine" | "denim" | "paper";
  featured?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
  repo: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "rsi-learning-platform",
    index: "01",
    title: "RSI Learning Platform",
    repoName: "RSI_Learning_Platform_Website",
    category: "Aplikasi web",
    year: "2026",
    accent: "butter",
    featured: true,
    summary:
      "Platform belajar untuk mata kuliah Rekayasa Sistem Informasi: materi, kuis adaptif, dan dasbor per peran dalam satu aplikasi Next.js.",
    bullets: [
      "Autentikasi dan hak akses untuk siswa, guru, dan orang tua, dengan skema Prisma dan migrasi database.",
      "Kuis adaptif dengan bank soal per topik, ditambah dasbor guru yang memuat grafik.",
      "Seed data per peran supaya aplikasi bisa langsung dicoba tanpa mengisi manual.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    repo: "https://github.com/iaanne/RSI_Learning_Platform_Website",
  },
  {
    slug: "event-management",
    index: "02",
    title: "Manajemen Event",
    repoName: "rsi-penugasan4-kelompok1",
    category: "Full stack",
    year: "2026",
    accent: "paper",
    summary:
      "Monorepo manajemen event yang memisahkan frontend Next.js dan backend FastAPI, disambungkan lewat REST API.",
    bullets: [
      "Frontend Next.js dengan Tailwind, Axios sebagai lapisan service, dan Zustand untuk state autentikasi.",
      "Backend FastAPI dengan migrasi database memakai Alembic.",
      "Satu repo untuk dua aplikasi, jadi kontrak API dan tipe data bisa dicek berdampingan.",
    ],
    stack: ["Next.js", "FastAPI", "TypeScript", "Zustand", "Alembic"],
    repo: "https://github.com/iaanne/rsi-penugasan4-kelompok1",
  },
  {
    slug: "eurogrid-intelligence",
    index: "03",
    title: "EuroGrid Intelligence",
    repoName: "dabd-eurointellegence",
    category: "Data platform",
    year: "2026",
    accent: "pine",
    summary:
      "Platform data kelistrikan Eropa: menarik data pembangkitan, beban, harga, dan cuaca, lalu menerbitkannya sebagai tabel Iceberg.",
    bullets: [
      "Sumber Energy-Charts dan Open-Meteo ditulis ke lapisan Bronze yang bisa direplay.",
      "Batch dijaga idempoten dengan checksum, jadi pengulangan tidak menggandakan data.",
      "Peran saya di kelompok: platform dan storage, termasuk publikasi tabel Iceberg di Garage S3.",
    ],
    stack: ["Python", "Apache Iceberg", "Garage S3", "Data modeling"],
    repo: "https://github.com/iaanne/dabd-eurointellegence",
  },
  {
    slug: "usgs-earthquake-pipeline",
    index: "04",
    title: "Pipeline Gempa USGS",
    repoName: "cloud-usgs-earthquake",
    category: "Cloud",
    year: "2026",
    accent: "denim",
    summary:
      "Pipeline Azure Data Factory yang menarik katalog gempa USGS ke Azure Data Lake Storage Gen2 sebagai lapisan Bronze.",
    bullets: [
      "Tumbling window trigger menjalankan 126 jendela, seluruhnya berstatus Succeeded.",
      "Data disimpan di Data Lake Gen2 untuk proyek prediksi gempa susulan.",
      "Bagian training dan inference di dalam pipeline belum dikerjakan, dan itu saya tulis apa adanya di README.",
    ],
    stack: ["Azure Data Factory", "ADLS Gen2", "Data pipeline"],
    repo: "https://github.com/iaanne/cloud-usgs-earthquake",
  },
  {
    slug: "olist-crm-dashboard",
    index: "05",
    title: "CRM Insight Olist",
    repoName: "bi-olist-crm-dashboard",
    category: "Business intelligence",
    year: "2026",
    accent: "paper",
    summary:
      "Dasbor Streamlit tujuh halaman untuk membaca pelanggan Olist Brazilian E-Commerce, dari ringkasan sampai strategi retensi.",
    bullets: [
      "Segmentasi RFM dengan matriks Recency dan Frequency, plus buku strategi per segmen.",
      "Skor risiko tidak aktif 0 sampai 100, analisis kohort, dan pemicu pembelian ulang.",
      "Peta sebaran pelanggan dan filter yang berlaku lintas halaman.",
    ],
    stack: ["Python", "Streamlit", "Pandas", "RFM"],
    repo: "https://github.com/iaanne/bi-olist-crm-dashboard",
  },
  {
    slug: "notaris-triage",
    index: "06",
    title: "Notaris Triage",
    repoName: "kbr-notaris-triage-kelompok3",
    category: "Knowledge representation",
    year: "2026",
    accent: "persimmon",
    summary:
      "Ontologi OWL DL tentang perpindahan hak atas tanah, dengan chatbot yang menolak menutup sesi sebelum data kasus lengkap.",
    bullets: [
      "31 kelas, 16 object property, 10 data property, dan 8 aturan SWRL.",
      "10 query SPARQL untuk 10 competency question, plus dokumen ketertelusuran pasal ke aturan.",
      "Chatbot slot-filling yang menyusun jawaban dari hasil SPARQL, bukan dari tebakan model bahasa.",
    ],
    stack: ["OWL DL", "SWRL", "SPARQL", "Protégé", "Python"],
    repo: "https://github.com/iaanne/kbr-notaris-triage-kelompok3",
  },
  {
    slug: "prewitt-edge-detection",
    index: "07",
    title: "Deteksi Titik dan Tepi",
    repoName: "citra-deteksi-titik-garis-dan-tepi-kelompok4",
    category: "Computer vision",
    year: "2026",
    accent: "paper",
    summary:
      "Implementasi manual deteksi titik dan tepi Prewitt pada citra biomedis, tanpa operator siap pakai dari pustaka.",
    bullets: [
      "Konvolusi 3x3 ditulis sendiri dengan NumPy, termasuk mask deteksi titik 8 tetangga.",
      "Dua citra uji: Burj Khalifa dan Route 66, keduanya diubah ke keabuan lebih dulu.",
      "Citra besar diperkecil dengan interpolasi area sebelum diproses.",
    ],
    stack: ["Python", "NumPy", "Image processing"],
    repo: "https://github.com/iaanne/citra-deteksi-titik-garis-dan-tepi-kelompok4",
  },
  {
    slug: "filter-histogram",
    index: "08",
    title: "Filter dan Histogram",
    repoName: "citra-input-ref-kelompok4",
    category: "Computer vision",
    year: "2026",
    accent: "sky",
    summary:
      "Notebook pengolahan citra CT kepala: mean filter, median filter, perataan histogram, dan spesifikasi histogram.",
    bullets: [
      "Filter mean dan median ukuran 3x3 serta 5x5, diimplementasikan manual dengan NumPy.",
      "Spesifikasi histogram memakai citra referensi MRI T2 untuk memindahkan distribusi intensitas.",
      "Setiap langkah disertai histogram dan analisis, bukan hanya gambar hasil.",
    ],
    stack: ["Python", "Jupyter", "NumPy", "SciPy", "Matplotlib"],
    repo: "https://github.com/iaanne/citra-input-ref-kelompok4",
  },
  {
    slug: "serving-api-benchmark",
    index: "09",
    title: "Serving API dan Little's Law",
    repoName: "dabd-servingapi-kelompok1",
    category: "Infrastruktur",
    year: "2026",
    accent: "pine",
    summary:
      "Eksperimen serving: satu server Node.js di dalam container, diuji dengan berkas berukuran 1 KB sampai 100 MB.",
    bullets: [
      "Server dibungkus Containerfile dan dijalankan lewat compose.",
      "Uji beban dibaca dengan Little's Law untuk melihat hubungan konkurensi, waktu tunggu, dan throughput.",
      "Generator berkas menyiapkan data uji dari ukuran kecil sampai besar.",
    ],
    stack: ["Node.js", "Container", "Load testing"],
    repo: "https://github.com/iaanne/dabd-servingapi-kelompok1",
  },
  {
    slug: "event-crud",
    index: "10",
    title: "CRUD Event dan Registrasi",
    repoName: "rsi-penugasan2-kelompok1",
    category: "Backend",
    year: "2026",
    accent: "paper",
    summary:
      "Latihan CRUD event dan registrasi dengan backend FastAPI berlapis, dilengkapi alur kerja Git untuk tim.",
    bullets: [
      "Struktur berlapis: controller, service, repository, dan schema terpisah.",
      "Model akun, peran, event, registrasi, dan log aktivitas dengan migrasi Alembic.",
      "Alur kerja tim memakai branch per anggota dan pull request, dengan saya di bagian debugging API.",
    ],
    stack: ["Python", "FastAPI", "Alembic", "Docker"],
    repo: "https://github.com/iaanne/rsi-penugasan2-kelompok1",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
