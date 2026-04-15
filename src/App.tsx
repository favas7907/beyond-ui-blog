import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="content-shell flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features />} />
              <Route path="*" element={
                <div className="py-20 text-center space-y-6">
                  <h1 className="text-6xl font-black">404</h1>
                  <p className="text-xl text-text-secondary">Page not found.</p>
                  <a href="/" className="pill-button bg-text-primary text-white inline-block">Go Home</a>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}
