import { Mail, Linkedin } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contact" className="py-12 px-6 text-center bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-1">I am currently looking for a job!</h2>
      <p> Feel free to reach out—I’m always open to new opportunities, collaborations, or just a good conversation!</p>
      <div className="flex justify-center gap-8 flex-wrap items-center text-lg m-6">
        <a
          href="mailto:emholland6@gmail.com"
          className="flex items-center gap-2 hover:text-blue-600 transition"
          aria-label="Send email to Elisa Holland"
        >
          <Mail className="w-5 h-5" />
          emholland6@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/elisa-holland-a33a76208"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
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
