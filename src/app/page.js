import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Spacer sections for scroll testing */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-heading font-bold text-gradient">About</h2>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-heading font-bold text-gradient">Skills</h2>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-heading font-bold text-gradient">
          Projects
        </h2>
      </section>

      <section
        id="education"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-heading font-bold text-gradient">
          Education
        </h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-heading font-bold text-gradient">
          Contact
        </h2>
      </section>
    </div>
  );
}
