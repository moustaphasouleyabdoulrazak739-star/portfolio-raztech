function Skills() {
  return (
    <section id="competences" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">

        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          Competences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div data-aos="fade-up" data-aos-delay="100" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Frontend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React Native</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Backend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Django REST</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>JWT Auth</li>
              <li>API REST</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Cybersecurite</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Kali Linux</li>
              <li>Nmap</li>
              <li>DVWA</li>
              <li>Pentest Red Team</li>
              <li>Bug Bounty</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Outils</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Git / GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>VirtualBox</li>
              <li>Figma</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Certifications</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>APSI Academy Module 1</li>
              <li>Claude Code 101</li>
              <li>eJPT (en cours)</li>
              <li>TryHackMe</li>
              <li>PicoCTF</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Langues</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Francais - Natif</li>
              <li>Anglais - Technique</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;