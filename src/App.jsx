import "./App.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactModal from "./components/ContactModal";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const education = [
    {
      year: "2022 – Present",
      institution: "Vivekanand Education Society’s College of Law, Mumbai",
      degree: "LL.M.",
    },
    {
      year: "2022",
      institution: "Vivekanand Education Society’s College of Law, Mumbai",
      degree: "B.L.S. LL.B.",
    },
    {
      year: "2017",
      institution:
        "Bhavans Hazarimal College of Arts, Science and Commerce, Mumbai",
      degree: "H.S.C.",
    },
    {
      year: "2015",
      institution: "Holy Cross High School, Mumbai",
      degree: "S.S.C.",
    },
  ];

  const practiceAreas = [
    {
      title: "Civil & Commercial Litigation",
      description:
        "Extensive exposure to proceedings under the Code of Civil Procedure, MOFA Act, Maharashtra Co-operative Societies Act, and Bombay Rent Act among others, appearing before Bombay High Court and various subordinate courts.",
    },
    {
      title: "Family & Domestic Laws",
      description:
        "Handled drafting and litigation related to family disputes, including matters under Domestic Violence Act, Family Law statutes, and maintenance and custody matters before Family Courts and trial courts.",
    },
    {
      title: "Property & Tenancy Law",
      description:
        "Advised and represented clients in title verification, SRA, MHADA-related disputes, tenancy issues under Bombay Rent Act, and transactions involving real estate documentation like MOUs, sale deeds, and gift deeds.",
    },
    {
      title: "Cyber & Criminal Law",
      description:
        "Experience assisting in cases involving cybercrime, dishonour of cheques under Section 138 of NI Act, bail applications, and proceedings under IPC and CrPC in Sessions and Magistrate Courts.",
    },
    {
      title: "Legal Drafting & Documentation",
      description:
        "Drafted various legal documents including writ petitions, suits, affidavits, notices, agreements, indemnity bonds, MOUs, and pleadings before civil and quasi-judicial forums.",
    },
    {
      title: "Consumer & Tribunal Matters",
      description:
        "Appeared before Consumer Disputes Redressal Forums and Administrative Tribunals, representing clients in service, real estate, and other consumer-related disputes.",
    },
  ];

  const activities = [
    {
      title: "Diploma in Cyber Laws",
      emoji: "💻",
      description:
        "Explored legal frameworks for digital privacy, cybercrimes, data protection, and online contracts.",
    },
    {
      title: "Diploma in I.P.R.",
      emoji: "📚",
      description:
        "Studied intellectual property rights including patents, trademarks, copyrights, and enforcement mechanisms.",
    },
    {
      title: "Legal Aid Participation",
      emoji: "⚖️",
      description:
        "Contributed to access-to-justice programs through legal aid initiatives.",
    },
    {
      title: "Debate & Moot Court",
      emoji: "🎤",
      description:
        "Represented in inter-collegiate debate and moot competitions.",
    },
    {
      title: "Sports Participation",
      emoji: "🏸",
      description:
        "Actively involved in both indoor and outdoor sports events.",
    },
    {
      title: "Cross-College Events",
      emoji: "🎓",
      description: "Engaged in events hosted by other law colleges.",
    },
    {
      title: "Civil Services Orientation",
      emoji: "🏛️",
      description:
        "Attended a detailed orientation focused on civil service preparation.",
    },
  ];

  return (
    <div className="font-sans">
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--navbar-scrolled-bg)] shadow-md"
            : "bg-[var(--primary)]"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-6 transition-colors duration-300">
          <h1
            className={`text-xl md:text-2xl font-serif ${
              scrolled
                ? "text-[var(--navbar-scrolled-text)]"
                : "text-[var(--accent)]"
            }`}
          >
            Advocate Ganesh R. Narula
          </h1>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex space-x-6 text-sm ${
              scrolled
                ? "text-[var(--navbar-scrolled-text)]"
                : "text-[var(--white)]"
            }`}
          >
            <a
              href="#experience"
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Professional Journey
            </a>
            <a
              href="#qualifications"
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Academic Background
            </a>
            <a
              href="#activities"
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Beyond the Courtroom
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[var(--white)] focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden flex flex-col items-start space-y-4 px-6 pb-6 text-sm ${
              scrolled
                ? "text-[var(--navbar-scrolled-text)]"
                : "text-[var(--white)]"
            }`}
          >
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Professional Journey
            </a>
            <a
              href="#qualifications"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Academic Background
            </a>
            <a
              href="#activities"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Beyond the Courtroom
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--navbar-scrolled-accent)] transition"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 md:py-20 text-white bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif mb-4 text-[var(--accent)]">
            Trusted Legal Expertise
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--background)" }}
          >
            Over 5 years of legal exposure through academic grounding and
            hands-on practice in civil, criminal, corporate, and personal laws —
            including litigation, drafting, and research — at the Hon’ble Bombay
            High Court, trial courts, and tribunals across Mumbai.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 sm:px-6 py-3 mt-6 cursor-pointer rounded-full font-semibold hover:scale-105 transition text-sm sm:text-base"
            style={{
              background:
                "linear-gradient(to right, var(--cta-gradient-start), var(--cta-gradient-end))",
              color: "var(--white)",
            }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-[var(--white)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] mb-10 font-serif text-center">
          Practice Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl shadow-md border-l-4 border-[var(--accent)] bg-[var(--card-bg)] hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--primary)]">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--background)] to-[#eae7db]"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] mb-10 sm:mb-12 font-serif text-center relative">
          <span className="relative z-10">Professional Journey</span>
          <span className="absolute inset-x-0 bottom-0 h-2 bg-[var(--accent-light)] z-0 rounded"></span>
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {/* Junior Advocate */}
          <div className="relative bg-[var(--card-bg)] p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-[var(--accent)] overflow-hidden group">
            <div className="absolute -top-8 -right-8 text-[60px] sm:text-[80px] opacity-10 text-[var(--accent)] group-hover:opacity-20 transition-all">
              ⚖️
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--primary)]">
                Junior Advocate
              </h3>
              <p className="italic text-sm text-[var(--text-secondary)]">
                November 2022 – Present
              </p>
            </div>

            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-6">
              <strong>Adv. Jahan-ara Sarkhot, Mumbai</strong>
              <br />
              Counsel at Hon’ble Bombay High Court
            </p>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base font-semibold text-[var(--primary)] mb-1">
                Responsibilities:
              </h4>
              <ul className="list-inside list-disc text-sm sm:text-[15px] text-[var(--text-main)] space-y-1">
                <li>
                  Researched & assisted in cases under Civil, Co-operative, Land
                  Revenue, Arbitration, Hindu Law, Trusts, POCSO, DV Act, MHADA,
                  Limitation, Evidence, Consumer Protection & more.
                </li>
                <li>
                  Drafted Writs, Suits, Appeals, Interim & Original
                  Applications, Change Reports, Affidavits, Legal Notices,
                  Replies, CAVEATs, Chronologies, Synopsis, and more.
                </li>
                <li>
                  Appeared before Bombay High Court, City Civil & Small Causes
                  Courts, Panvel District Court, Administrator General, Charity
                  Commissioner, Registrars, and Consumer Forums.
                </li>
                <li>
                  Briefed Senior Counsels and actively participated in legal
                  conferences.
                </li>
              </ul>
            </div>
          </div>

          {/* Internship */}
          <div className="relative bg-[var(--card-bg)] p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-[var(--accent)] overflow-hidden group">
            <div className="absolute -top-8 -right-8 text-[60px] sm:text-[80px] opacity-10 text-[var(--accent)] group-hover:opacity-20 transition-all">
              📄
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--primary)]">
                Internship
              </h3>
              <p className="italic text-sm text-[var(--text-secondary)]">
                October 2021 – October 2022
              </p>
            </div>

            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-6">
              <strong>Adv. Rajendra D. Gorde, Mumbai</strong>
            </p>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base font-semibold text-[var(--primary)] mb-1">
                Legal Exposure:
              </h4>
              <ul className="list-inside list-disc text-sm sm:text-[15px] text-[var(--text-main)] space-y-1">
                <li>
                  Attended court proceedings: Magistrate, Sessions, Family
                  Courts, Juvenile Justice Board.
                </li>
                <li>
                  Drafted complaints under Cr.P.C., I.P.C., NI Act (138), Family
                  & DV Laws.
                </li>
                <li>
                  Composed Bail Applications, Legal Notices, Replies, and
                  supporting documents.
                </li>
                <li>
                  Drafted MOUs, Sale-Purchase Agreements, Indemnity Bonds,
                  Family Settlements, Gift/Release Deeds, Wills, Affidavits, and
                  more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications */}
      <section
        id="qualifications"
        className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#fdfcf9] overflow-hidden"
      >
        {/* Background watermark icon */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="text-[120px] sm:text-[160px] md:text-[220px] text-[var(--background)] opacity-10 z-0">
            🎓
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[var(--primary)] mb-12 sm:mb-16 font-serif text-center relative z-10">
          Academic Background
        </h2>

        <div className="relative flex flex-col space-y-12 sm:space-y-16 max-w-4xl mx-auto z-10">
          {education.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-start ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Vertical line (show only on sm and up) */}
              <div className="hidden sm:block absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--accent)] z-0"></div>

              {/* Timeline marker */}
              <div className="text-xl sm:text-2xl bg-[var(--accent-light)] text-white shadow-md rounded-md px-[10px] py-[6px] z-10 mx-auto sm:mx-6 mb-4 sm:mb-0">
                🎓
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6 w-full mx-auto sm:mx-6 max-w-md z-10">
                <p className="text-sm text-[var(--text-secondary)] italic mb-2">
                  {item.year}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--primary)] mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm sm:text-[15px] text-[var(--text-main)]">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section
        id="activities"
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#f8f5ee]"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[var(--primary)] mb-10 sm:mb-12 font-serif text-center">
          Beyond the Courtroom
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activities.map((item, index) => (
            <div
              key={index}
              className="group border-l-4 border-[var(--accent)] p-5 sm:p-6 rounded-xl bg-[var(--card-bg)] hover:bg-[#fef9ed] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl sm:text-2xl">{item.emoji}</span>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
              </div>

              {item.description && (
                <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-main)] transition-colors leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-[var(--white)]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-3 sm:mb-4 text-[var(--primary)]">
            Get In Touch
          </h3>
          <p className="mb-5 sm:mb-6 text-sm sm:text-base text-[var(--text-secondary)]">
            Reach out for consultations, collaborations, or legal advice.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 sm:px-6 py-3 rounded-full cursor-pointer font-semibold hover:scale-105 transition text-sm sm:text-base"
            style={{
              background:
                "linear-gradient(to right, var(--cta-gradient-start), var(--cta-gradient-end))",
              color: "var(--white)",
            }}
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-xs sm:text-sm bg-[var(--primary)] text-[var(--white)]">
        &copy; 2025 Advocate Ganesh R. Narula. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
