import { Link } from "react-scroll";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/footer";


export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-4 bg-white shadow-sm z-50">
        {/* Left - Profile Image */}
        <img
          src="/myphoto2.jfif"
          alt="Utkarsh"
          className="w-12 h-12 rounded-full transition-transform duration-300 hover:rotate-6"
        />

        {/* Right - Links */}
        <div className="flex gap-6">
          <Link to="home" smooth duration={500} className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">Home</Link>
          <Link to="about" smooth duration={500} className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">About</Link>
          <Link to="contact" smooth duration={500} className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">Contact</Link>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
