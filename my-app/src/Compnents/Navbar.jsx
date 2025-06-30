
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white/30 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-red-600">
          <Link to="/">BBC Blog</Link>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink label="Home" path="/" />
          <NavLink label="Create Post" path="/create" />
          <NavLink label="Contact" path="/contact" />
        </div>

        {/* Hamburger menu */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/70 backdrop-blur-md shadow-md">
          <NavLink label="Home" path="/" />
          <NavLink label="Create Post" path="/create" />
          <NavLink label="Contact" path="/contact" />
        </div>
      )}
    </nav>
  );

  function NavLink({ label, path }) {
    return (
      <Link
        to={path}
        className={`relative px-3 py-2 transition hover:text-red-600 ${
          isActive(path) ? 'text-red-600 font-semibold' : 'text-gray-900'
        }`}
      >
        {label}
        {isActive(path) && (
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-600 animate-slideIn" />
        )}
      </Link>
    );
  }
}

