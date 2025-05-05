const AboutMe = () => {
    return (
      <section
        id="about"
        style={{ backgroundColor: 'white' }}
        className="py-12 px-6 rounded-2xl shadow-md max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6"
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
            I'm Elisa Holland, a Computer Science major with a minor in Communication Studies at Temple University, 
            graduating in May 2025. I’m passionate about building meaningful tech—whether it’s a React-powered app, 
            an AI storytelling tool, or a product that bridges design and backend logic.
            <br /><br />
            I thrive in collaborative environments and bring both technical skills and creative thinking to every project. 
            I’ve worked on projects involving Firebase, AWS, OpenAI APIs, and I love solving problems at the intersection 
            of software and user experience.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
  