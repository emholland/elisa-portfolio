const AboutMe = () => {
  return (
    <section
      id="about"
      style={{ backgroundColor: 'white' }}
      className="relative py-12 px-4 sm:px-6 rounded-2xl shadow-md max-w-4xl mx-auto"
    >
      {/* Top Row: Image + Header */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src="/profile_img.jpeg"
          alt="Elisa Holland"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gray-300 shadow-sm"
        />
        <h2 className="text-3xl font-bold">About Me</h2>
      </div>

      {/* Paragraph Below */}
      <p className="text-lg text-gray-700 leading-relaxed">
        I'm Elisa Holland, a recent Computer Science graduate from Temple University with a minor in Communication Studies,
        actively seeking full-time opportunities in software engineering or technical product roles. I’m passionate about
        building thoughtful, cutting edge, user-focused tech.

        <br /><br />

        I bring both strong engineering fundamentals and a creative, design-minded approach to development. My projects are built end-to-end, often starting with stakeholder collaboration to define clear requirements and executed using Agile methodologies in cross-functional teams.
        I enjoy solving real-world problems and thinking through the details that make good products great.

        <br /><br />

        Outside of the code, I value clear communication, fast learning, and shipping with care. I’m especially excited to join
        a team where I can grow, contribute, and help build something meaningful.
      </p>
    </section>
  );
};

export default AboutMe;


  