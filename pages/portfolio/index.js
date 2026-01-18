import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      className="p-10 max-w-5xl mx-auto pt-48
                min-h-screen overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Page title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center cursor-pointer"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05, color: "#e838cc" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        Portfolio & Resume
      </motion.h1>

      {/* Projects Section */}
      <motion.section
        className="mb-12"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, color: "#4a22bd" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <p className="mb-6 text-center">
          Here are some of my coding projects, including C# and Python applications.
        </p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/OlaShu112"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            View GitHub
          </motion.a>

          {/* C# Projects Button */}
          <motion.a
            href="#csharp-projects"
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            View C# Projects
          </motion.a>
        </motion.div>
      </motion.section>

      {/* C# Projects Section */}
      <motion.section
        id="csharp-projects"
        className="mt-12 text-center" // <-- CENTERED
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-4 cursor-pointer"
          whileHover={{ scale: 1.02, color: "#e838cc" }}
          whileTap={{ scale: 0.95 }}
        >
          C# Projects
        </motion.h3>
        {/* Add C# project cards or links here */}
      </motion.section>

      {/* Resume Section */}
      <motion.section
        className="mt-12 text-center" // <-- CENTERED
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 cursor-pointer"
          whileHover={{ scale: 1.03, color: "#4a22bd" }}
          whileTap={{ scale: 0.95 }}
        >
          Resume / CV
        </motion.h2>

        <p className="mb-6">
          Download my resume to see my full experience, skills, and education.
        </p>

        <motion.a
          href="/files/OlaResume.pdf"
          download
          className="px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.section>
    </motion.div>
  );
}
