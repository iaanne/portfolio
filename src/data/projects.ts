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
    slug: "notaris-triage",
    index: "01",
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
    slug: "rosbd-dedolarisasi",
    index: "02",
    title: "Monitoring Dedolarisasi ASEAN",
    repoName: "rosbd-finalproject-kelompok4",
    category: "Real-time data",
    year: "2026",
    accent: "pine",
    summary:
      "Dasbor real-time pergerakan mata uang ASEAN terhadap USD dan CNY, dengan clustering, deteksi anomali, dan notifikasi Telegram.",
    bullets: [
      "Tiga laptop dibagi per peran: ingestion Kafka, pemrosesan Spark, lalu serving.",
      "Saya di bagian serving: FastAPI, Cassandra, Elasticsearch, dasbor React, dan bot Telegram.",
      "Klaster K-Means, DBSCAN, dan AHC dihitung dari korelasi bergulir, volatilitas, dan RSI.",
    ],
    stack: ["Kafka", "Spark", "Cassandra", "FastAPI", "React"],
    repo: "https://github.com/iaanne/rosbd-finalproject-kelompok4",
  },
  {
    slug: "dm-clustering-asean",
    index: "03",
    title: "Clustering Stabilitas Mata Uang ASEAN",
    repoName: "dm-finalproject-kelompok4",
    category: "Data mining",
    year: "2026",
    accent: "sky",
    summary:
      "Perbandingan empat algoritma clustering untuk membaca stabilitas enam mata uang ASEAN terhadap USD.",
    bullets: [
      "K-Means, DBSCAN, AHC, dan K-Medoids dijalankan pada fitur bulanan hasil agregasi data harian.",
      "Fitur mencakup mean, standar deviasi, volatilitas, perubahan persen, dan inflasi Bank Dunia.",
      "Bagian saya: dasbor Streamlit dan React berisi scatter PCA, timeline, dan analisis kebijakan LCT.",
    ],
    stack: ["Python", "Streamlit", "Plotly", "scikit-learn"],
    repo: "https://github.com/iaanne/dm-finalproject-kelompok4",
  },
  {
    slug: "rsi-learning-platform",
    index: "04",
    title: "RSI Learning Platform",
    repoName: "RSI_Learning_Platform_Website",
    category: "Aplikasi web",
    year: "2026",
    accent: "butter",
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
    slug: "ml-bisindo",
    index: "05",
    title: "Caption BISINDO Multimodal",
    repoName: "ml-bisindo-multimodal-keypoint-caption",
    category: "Machine learning",
    year: "2026",
    accent: "paper",
    summary:
      "Rencana proyek caption BISINDO yang menggabungkan keypoint dan modalitas lain. Repo masih tahap awal.",
    bullets: [
      "Isi repo baru README berisi judul proyek.",
      "Belum ada kode, model, atau hasil yang bisa dibaca.",
    ],
    stack: [],
    repo: "https://github.com/iaanne/ml-bisindo-multimodal-keypoint-caption",
    note: "Kode belum diunggah, jadi halaman ini hanya mencatat rencananya.",
  },
  {
    slug: "nlp-rag",
    index: "06",
    title: "RAG Kelompok 6",
    repoName: "nlp-rag-kelompok6",
    category: "NLP",
    year: "2026",
    accent: "paper",
    summary:
      "Tugas NLP tentang retrieval augmented generation. Yang tersimpan baru satu berkas data tanya jawab.",
    bullets: [
      "Berkas data EWS_v5_USONLY_final_QA.jsonl berukuran 39 KB.",
      "Kode retrieval dan generasi belum ada di repo.",
    ],
    stack: [],
    repo: "https://github.com/iaanne/nlp-rag-kelompok6",
    note: "Kode belum diunggah, jadi halaman ini hanya mencatat isi repo.",
  },
  {
    slug: "ipbd-stock-pipeline",
    index: "07",
    title: "Pipeline Saham IHSG",
    repoName: "ipbd-tbp-kelompok7",
    category: "Infrastruktur",
    year: "2026",
    accent: "denim",
    summary:
      "Pipeline big data untuk IHSG: memprediksi kapan indeks menyentuh 6000, lengkap dengan monitoring dan alert.",
    bullets: [
      "Batch Spark, streaming Kafka, dan orkestrasi Prefect dalam satu compose berisi belasan service.",
      "Penyimpanan memakai Garage S3, Hive Metastore, dan Trino, dengan metrik masuk Grafana dan Prometheus.",
      "Saya mengerjakan data engineer, infrastruktur, dan model: K-Means serta LSTM untuk prediksi.",
    ],
    stack: ["Spark", "Kafka", "Prefect", "Trino", "Garage S3"],
    repo: "https://github.com/iaanne/ipbd-tbp-kelompok7",
  },
  {
    slug: "imdb-showfy",
    index: "08",
    title: "Katalog Film IMDb",
    repoName: "imdb-showfy",
    category: "Aplikasi web",
    year: "2025",
    accent: "sky",
    summary:
      "Aplikasi katalog IMDb berbasis Laravel: pencarian judul, film, serial, genre, dan daftar tontonan.",
    bullets: [
      "Dasbor eksekutif berisi film teratas, popularitas genre, dan tren rating.",
      "Halaman produksi untuk mengelola data judul, terpisah dari sisi publik.",
      "Login dan peran pengguna menentukan halaman mana yang bisa dibuka.",
    ],
    stack: ["Laravel", "PHP", "Blade"],
    repo: "https://github.com/iaanne/imdb-showfy",
    note: "Repo kerja kelompok. Commit di repo ini atas nama anggota lain, jadi halaman ini mendeskripsikan aplikasinya.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
