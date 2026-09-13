import Navbar from "@/components/Navbar";

const NAV_LINKS = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
                  University of California, Irvine
                </h3>
                <p className="text-gray-600">
                  Bachelor, Computer Science, Specialization in AI
                </p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>09/2024 – 06/2027</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">GPA: 3.76</p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Coursework:</span> Machine
              Learning, Artificial Intelligence, Data Structures and Algorithms,
              Databases, Operating Systems, Computer Architecture, Python, C++,
              Java
            </p>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>

          {/* Nokia */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  Software Quality Assurance Engineer Co-Op
                </h3>
                <p className="text-gray-600">Nokia</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Sunnyvale, CA</p>
                <p>08/2026 – Present</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Developed automation scripts in Python to support regression
                testing and validate protocol performance for high-speed routing
                platforms
              </li>
              <li>
                Designed and maintained testbeds using traffic generators and
                protocol emulators, evaluating the fidelity of simulated
                scenarios against real-world network edge cases
              </li>
              <li>
                Investigated AI and LLM integration into Quality Assurance
                workflows to benchmark automated test generation and assist in
                log parsing for complex network scenarios
              </li>
            </ul>
          </div>

          {/* AI Medical Mixer */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">AI Engineering Intern</h3>
                <p className="text-gray-600">AI Medical Mixer</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>01/2026 – 08/2026</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Engineered a Mixture of Agents Large Language Model architecture
                utilizing a generate-critique-aggregate pattern to synthesize
                clinical insights from multimodal medical data, improving
                diagnostic reasoning accuracy
              </li>
              <li>
                Designed and deployed a cross-platform desktop framework for
                macOS, Windows, and Linux, integrating a secure cloud-based
                backend to manage remote license authentication, telemetry
                ingestion, and automated updates
              </li>
              <li>
                Architected a Retrieval-Augmented Generation (RAG) pipeline to
                ground model responses in verified clinical databases, reducing
                hallucinations by injecting real-time medical context into the
                inference prompt
              </li>
            </ul>
          </div>

          {/* UC Irvine Research */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">
                  Computer Science Research Assistant
                </h3>
                <p className="text-gray-600">University of California, Irvine</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Irvine, CA</p>
                <p>05/2026 – 08/2026</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                Fine-tuned transformer and classification models on multi-modal
                interaction datasets from study participants, achieving over 80%
                accuracy in categorizing student engagement and learning
                behaviors
              </li>
              <li>
                Processed, cleaned, and anonymized large-scale user interaction
                logs to track learning trajectories
              </li>
              <li>
                Synthesized and mapped relevant literature across Computer
                Science education and Human-Computer Interaction, establishing
                theoretical frameworks and baseline methodologies for
                experimental study design
              </li>
            </ul>
          </div>

          {/* DataAnnotation */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-semibold">Programming AI Evaluator</h3>
                <p className="text-gray-600">DataAnnotation</p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right mt-1 sm:mt-0">
                <p>Dublin, CA</p>
                <p>06/2025 – 09/2025</p>
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
                Provided detailed evidence-based feedback on model performance,
                including edge cases and anomalies
              </li>
            </ul>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">
                MLMLDance Audio to 3D Motion Generation
              </h3>
              <p className="text-sm text-gray-500">12/2025 – Present</p>
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
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Programming Languages:</span>{" "}
              <span className="text-gray-700">
                C/C++, Python, Java, Bash, HTML/CSS, JavaScript, Typescript, SQL
              </span>
            </div>
            <div>
              <span className="font-medium">Programming Tools:</span>{" "}
              <span className="text-gray-700">
                Git, Pytest, GTest, React, Node.js, SQLite
              </span>
            </div>
            <div>
              <span className="font-medium">AI/ML:</span>{" "}
              <span className="text-gray-700">
                Pytorch, scikit-learn, OpenAI API, llama.cpp, Numpy, Intel
                oneAPI
              </span>
            </div>
            <div>
              <span className="font-medium">DevOps:</span>{" "}
              <span className="text-gray-700">
                Linux, Proxmox, Cloudflare, Docker, Kubernetes, Amazon Web
                Services (AWS), Computer Networking
              </span>
            </div>
            <div>
              <span className="font-medium">Embedded Development:</span>{" "}
              <span className="text-gray-700">
                Raspberry Pi, Arduino, ESP32, Kicad
              </span>
            </div>
            <div>
              <span className="font-medium">Other Skills:</span>{" "}
              <span className="text-gray-700">
                Microsoft Excel, Agile, Scrum, Kanban, Code Review, CAD,
                Technical Writing
              </span>
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