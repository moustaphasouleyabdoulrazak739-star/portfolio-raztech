import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [envoye, setEnvoye] = useState(false);
  const [chargement, setChargement] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setChargement(true);

  emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.from_name,
        from_email: form.from_email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setEnvoye(true);
      setChargement(false);
    }).catch(() => {
      alert("Erreur lors de l'envoi. Reessayez.");
      setChargement(false);
    });
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          Me Contacter
        </h2>

        {envoye ? (
          <div className="text-center bg-green-100 text-green-700 rounded-2xl p-8">
            <p className="text-xl font-bold mb-2">Message envoye !</p>
            <p>Merci de m'avoir contacte. Je vous repondrai tres bientot.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm space-y-6">

            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Nom complet</label>
              <input type="text" name="from_name" value={form.from_name} onChange={handleChange} required placeholder="Votre nom" className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-indigo-600" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email</label>
              <input type="email" name="from_email" value={form.from_email} onChange={handleChange} required placeholder="votre@email.com" className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-indigo-600" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Votre message..." rows="5" className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-indigo-600"></textarea>
            </div>

            <button type="submit" disabled={chargement} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
              {chargement ? "Envoi en cours..." : "Envoyer le message"}
            </button>

          </form>
        )}

        <div className="mt-10 flex justify-center gap-8 text-gray-500 dark:text-gray-400">
          <a href="https://github.com/r2zak" className="hover:text-indigo-600 transition">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-indigo-600 transition">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-indigo-600 transition">Instagram</a>
        </div>

      </div>
    </section>
  );
}

export default Contact;