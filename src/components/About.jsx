function About() {
  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">

        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          A propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div data-aos="fade-right">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Je suis Moustapha, developpeur fullstack freelance base a Niamey, Niger. Je suis egalement etudiant en cybersecurite a l'APSI Academy, specialise en Pentest Red Team.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Je cree du contenu educatif en francais sur la cybersecurite et la programmation sous la marque Raz-Tech sur Instagram, LinkedIn, TikTok et d'autres plateformes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Mon objectif a court terme est d'obtenir la certification eJPT, puis l'OSCP dans les 12 a 18 prochains mois.
            </p>
          </div>

          <div data-aos="fade-left" className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-indigo-600 font-bold">Nom :</span>
                <span className="text-gray-700 dark:text-gray-300">Moustapha</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-600 font-bold">Localisation :</span>
                <span className="text-gray-700 dark:text-gray-300">Niamey, Niger</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-600 font-bold">Formation :</span>
                <span className="text-gray-700 dark:text-gray-300">APSI Academy - Pentest Red Team</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-600 font-bold">Objectif :</span>
                <span className="text-gray-700 dark:text-gray-300">eJPT puis OSCP</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-600 font-bold">Disponible :</span>
                <span className="text-green-500 font-semibold">Oui - Freelance</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;