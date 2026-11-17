import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollManager } from "./components/ScrollManager";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a
        href="#konten"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border-2 focus:border-ink focus:bg-butter focus:px-4 focus:py-3"
      >
        Lompat ke konten
      </a>
      <SiteHeader />
      <main id="konten">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyek/:slug" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}
