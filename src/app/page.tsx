import Navbar from "@/components/Navbar";

const NAV_LINKS = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
];

export default function Home() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {/* ── About ── */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Edwin He</h1>
          <p className="text-lg text-gray-600">
            Computer Science student at UC Irvine specializing in Artificial
            Intelligence. Passionate about machine learning, systems
            programming, and building impactful software.
          </p>
          <div className="flex justify-between text-sm text-gray-500 [&>*]:text-center">
            <span>Dublin, CA</span>
            <span className="text-gray-300">|</span>
            <a href="tel:+15107893855" className="hover:text-black transition">
              +1 510-789-3855
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:edwin@edwinhe.com"
              className="hover:text-black transition"
            >
              edwin@edwinhe.com
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://linkedin.com/in/edwin-he-a2463b270/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn ↗
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://github.com/Pickelgold"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  University of California Irvine
                </h3>
                <p className="text-gray-600">
                  Bachelor, Computer Science — Specialization in AI
                </p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>Sep. 2024 – Mar. 2027</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">GPA: 3.71</p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Coursework:</span> Machine
              Learning, Artificial Intelligence, Computer Vision, Data
              Structures and Algorithms, Databases, Operating Systems,
              Networking, Computer Architecture, Python, C++, Java
            </p>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>

          {/* Job 1 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">Software Engineering Intern</h3>
                <p className="text-gray-600">AI Medical Mixer</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>Jan. 2026 – Apr. 2026</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Fine-tuned Large Language Models (LLMs) using RAG
                (Retrieval-Augmented Generation) to ensure medical advice
                remained grounded in verified clinical data
              </li>
              <li>
                Optimized LLM inference for usage in low-bandwidth environments
                common for underdeveloped regions
              </li>
              <li>
                Orchestrated a multi-agent AI workforce to automate code review,
                documentation, and localization, streamlining the adaptation of
                health advice for different dialects in target countries
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  Learning Assistant – Data Structures and Algorithms
                </h3>
                <p className="text-gray-600">University of California Irvine</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>Nov. 2025 – Present</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Supported students with C++ programming concepts including data
                structures, memory management, and algorithmic efficiency
              </li>
              <li>
                Guided students through debugging processes, improving
                understanding of pointers, dynamic allocation, and STL
              </li>
              <li>
                Collaborated with instructional staff to review coursework,
                clarify conceptual challenges, and ensure consistent grading
                standards
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  AI Evaluator – Programming
                </h3>
                <p className="text-gray-600">DataAnnotation</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Dublin, CA</p>
                <p>Jun. 2025 – Nov. 2025</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Annotated and reviewed large datasets for training and
                evaluating LLM programming capability, ensuring data accuracy
                and relevance
              </li>
              <li>
                Tested model outputs for correctness, consistency, and alignment
                with task instructions
              </li>
              <li>
                Provided detailed feedback on model performance, including edge
                cases and anomalies
              </li>
            </ul>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Audio to 3D Motion Generation</h3>
              <p className="text-sm text-gray-500">Dec. 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Built a PyTorch-based training pipeline using 3D motion capture
                data and audio data, modeling root translation and joint
                rotation for audio-based full-body dance synthesis
              </li>
              <li>
                Converted 3D model hierarchy and motion channels into normalized
                tensor representations and aligned them with audio-derived
                features from audio files
              </li>
              <li>
                Trained temporal sequence models on synchronized audio–motion
                windows to generate beat-aligned dance motion
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Rhythm Game</h3>
              <p className="text-sm text-gray-500">Jul. 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Reduced stutter frametime from 42ms to 7ms by optimizing file
                loading and processing
              </li>
              <li>
                Achieved microsecond note and audio synchronization using
                absolute time calculation system with sub-millisecond precision
              </li>
              <li>
                Architected cross-platform file management system supporting
                Windows, Linux, macOS and web with persistent per-song settings
                and statistics
              </li>
            </ul>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Programming Languages:</span>{" "}
              <span className="text-gray-700">
                C/C++, Python, Java, Bash, C# .NET, HTML/CSS, JavaScript, SQL
              </span>
            </div>
            <div>
              <span className="font-medium">Programming Tools:</span>{" "}
              <span className="text-gray-700">
                Git, Pytest, GTest, React, SQLite, PostgreSQL, Unity, Godot
              </span>
            </div>
            <div>
              <span className="font-medium">AI/ML:</span>{" "}
              <span className="text-gray-700">
                PyTorch, scikit-learn, LLM APIs, llama.cpp, NumPy, Intel oneAPI
              </span>
            </div>
            <div>
              <span className="font-medium">DevOps:</span>{" "}
              <span className="text-gray-700">
                Linux, Proxmox, Cloudflare, Docker, Kubernetes, Amazon Web
                Services (AWS)
              </span>
            </div>
            <div>
              <span className="font-medium">Embedded Development:</span>{" "}
              <span className="text-gray-700">
                Raspberry Pi, Arduino, ESP32, KiCad
              </span>
            </div>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section id="leadership" className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Leadership</h2>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  Traditional Folk Ensemble @ UC Irvine
                </h3>
                <p className="text-gray-600 text-sm">
                  Club Executive Board Member
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                Sep. 2025 – Present
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">Osu! @ UC Irvine</h3>
                <p className="text-gray-600 text-sm">
                  Club Executive Board Member
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                Sep. 2025 – Present
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8">
        © {new Date().getFullYear()} Edwin He
      </footer>
    </>
  );
}
