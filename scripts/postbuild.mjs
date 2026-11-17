import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Hosting statis tanpa rewrite SPA perlu index.html di rute 404,
// supaya tautan dalam seperti /proyek/slug tetap terbuka.
const dist = resolve(process.cwd(), "dist");
const index = resolve(dist, "index.html");

if (!existsSync(index)) {
  console.error("dist/index.html tidak ada, jalankan vite build dulu.");
  process.exit(1);
}

copyFileSync(index, resolve(dist, "404.html"));
console.log("dist/404.html dibuat untuk deep link.");
