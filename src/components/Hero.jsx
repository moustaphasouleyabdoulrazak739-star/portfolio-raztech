function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="text-center px-4">

        <div className="w-32 h-32 rounded-full bg-indigo-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
          M
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bonjour, je suis <span className="text-indigo-600 dark:text-indigo-400">Moustapha</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Developpeur Fullstack et Etudiant en Cybersecurite
        </p>

        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Createur de contenu tech sur Raz-Tech. Passionne par le developpement web et la securite informatique.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projets" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Voir mes projets</a>
          <a href="#contact" className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition">Me contacter</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;