// pages/portfolio.js
export default function Portfolio() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio & Resume</h1>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        <p className="mb-6">
          Here are some of my coding projects, including C# applications and other work.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/OlaShu112"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View GitHub
          </a>

          <a
            href="/projects/csharp" // optional internal anchor if you have a section for C# projects
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View C# Projects
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Resume / CV</h2>
        <p className="mb-6">
          Download my resume to see my full experience, skills, and education.
        </p>

        <a
          href="/files/OlaWilliams_Resume.pdf" // put your resume in public/files/
          download
          className="px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}
