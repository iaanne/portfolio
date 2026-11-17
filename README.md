# Portofolio Ian

Situs portofolio statis: React 19, Vite, Tailwind v4, React Router.

## Menjalankan

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Hasilnya di `dist/`. Skrip build juga menyalin `index.html` menjadi `404.html`, supaya tautan dalam seperti `/proyek/slug` tetap terbuka di hosting yang tidak punya rewrite SPA.

## Isi

- `src/data/projects.ts` - sepuluh proyek pilihan, ringkasan dan stack.
- `src/data/archive.ts` - 25 repo lain di GitHub.
- `src/pages/Home.tsx` - hero, karya, arsip, tentang.
- `src/pages/ProjectPage.tsx` - halaman detail per proyek.

Semua teks ada di dua berkas data itu dan di halaman, jadi sunting langsung tanpa menyentuh gaya.
