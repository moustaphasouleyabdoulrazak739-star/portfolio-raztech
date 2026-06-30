import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Raz-Tech
        </span>

        <ul className="hidden md:flex gap-6">
          <li><a href="#accueil" className="hover:text-indigo-600 transition">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-indigo-600 transition">A propos</a></li>
          <li><a href="#competences" className="hover:text-indigo-600 transition">Competences</a></li>
          <li><a href="#projets" className="hover:text-indigo-600 transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-600 text-xl" />
            )}
          </button>

          <button className="md:hidden" onClick={() => setMenuOuvert(!menuOuvert)}>
            {menuOuvert ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {menuOuvert && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <li><a href="#accueil" onClick={() => setMenuOuvert(false)}>Accueil</a></li>
          <li><a href="#apropos" onClick={() => setMenuOuvert(false)}>A propos</a></li>
          <li><a href="#competences" onClick={() => setMenuOuvert(false)}>Competences</a></li>
          <li><a href="#projets" onClick={() => setMenuOuvert(false)}>Projets</a></li>
          <li><a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;