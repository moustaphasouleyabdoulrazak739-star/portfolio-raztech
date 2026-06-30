function Projects() {
  return (
    <section id="projets" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">

        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">N</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Nia Assurance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Application web fullstack de gestion d'assurance. Clients, contrats, sinistres et paiements integres.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Django REST</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">JWT</span>
            </div>
            <a href="https://github.com/r2zak" className="text-indigo-600 hover:underline text-sm">Voir sur GitHub</a>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">S</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Scan Reseau Nmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Exercice de reconnaissance reseau avec Nmap contre scanme.nmap.org. Rapport sur CVE-2016-6210.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Kali Linux</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Nmap</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Pentest</span>
            </div>
            <span className="text-gray-400 text-sm">Projet APSI Academy</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">D</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">SQL Injection DVWA</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Pratique d'injection SQL sur DVWA en environnement Kali Linux. Analyse des vulnerabilites et recommandations.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">DVWA</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">SQL Injection</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Kali Linux</span>
            </div>
            <span className="text-gray-400 text-sm">Projet APSI Academy</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">R</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Carousels Raz-Tech</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Contenu educatif en cybersecurite et programmation publie sur Instagram, LinkedIn, TikTok et autres plateformes.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Instagram</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">LinkedIn</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">TikTok</span>
            </div>
            <a href="https://instagram.com/raz-tech" className="text-indigo-600 hover:underline text-sm">Voir Raz-Tech</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;