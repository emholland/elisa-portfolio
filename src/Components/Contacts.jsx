import { Mail, Linkedin } from 'lucide-react';

const Contacts = () => {
  return (
    <section
      id="contact"
      className="py-12 px-4 sm:px-6 text-center bg-purple-50 rounded-2xl shadow-md w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">
        I am currently looking for a job!
      </h2>
      <p className="text-base sm:text-lg text-gray-700">
        Feel free to reach out—I’m always open to new opportunities and collaborations!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 flex-wrap items-center text-base sm:text-lg mt-6">
        <a
          href="mailto:emholland6@gmail.com"
          className="flex items-center gap-2 hover:text-purple-600 transition"
          aria-label="Send email to Elisa Holland"
        >
          <Mail className="w-5 h-5" />
          emholland6@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/elisa-holland-a33a76208"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-600 transition"
          aria-label="Visit Elisa Holland's LinkedIn profile"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contacts;

