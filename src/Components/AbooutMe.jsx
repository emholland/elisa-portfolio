const AboutMe = () => {
    return (
      <section
        id="about"
        style={{ backgroundColor: 'white' }}
        className="py-12 px-4 sm:px-6 rounded-2xl shadow-md max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <div className="flex-shrink-0">
          <img
            src="/profile_img.jpeg" // ← replace this with your image path
            alt="Elisa Holland"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-sm"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
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
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
  