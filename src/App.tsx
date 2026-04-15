import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-3">
        <p className="section-kicker">404</p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">Page not found</h1>
        <p className="max-w-xl text-text-secondary">
          The page you requested does not exist or has been moved.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="pill-button btn-dark">
          Go Home
        </Link>
        <Link to="/blog" className="pill-button">
          Browse Archive
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page-frame">
        <div className="app-shell">
          <Navbar />
          <main className="page-container flex-1 py-8 sm:py-10 lg:py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
