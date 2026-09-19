import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa6";

const App = () => {
  const skills = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Frontend",
      description: "Responsive and interactive user interfaces.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Backend",
      description: "Secure APIs and application workflows.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "JWT",
      ],
    },
    {
      number: "03",
      icon: <FaDatabase />,
      title: "Database",
      description: "Designing and managing application data.",
      technologies: ["MySQL", "SQLite"],
    },
    {
      number: "04",
      icon: <FaGitAlt />,
      title: "Tools",
      description: "Development and testing tools.",
      technologies: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  const technologies = [
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05080d] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">

        <div className="absolute left-[5%] top-[10%] h-87.5 w-87.5 rounded-full bg-cyan-400/6 blur-[130px]" />

        <div className="absolute right-[5%] top-[30%] h-112.5 w-112.5 rounded-full bg-blue-600/5 blur-[150px]" />

        <div className="absolute bottom-[10%] left-[35%] h-100 w-100 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">

  <nav className="group/nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-cyan-400/20 bg-[#080d14]/90 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-400/10 sm:px-5">

    {/* Logo */}

    {/* Logo */}

<a
  href="#home"
  className="group flex items-center gap-3"
>

  {/* Photo Logo */}

  <div className="relative">

    <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-lg transition-all duration-500 group-hover:bg-cyan-400/40" />

    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cyan-400 bg-[#0b1119] shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]">

      <img
        src="/profile.jpg"
        alt="Sasikumar S"
        className="h-full w-full object-cover object-top"
      />

    </div>

  </div>

  {/* Signature Name */}

  <div className="hidden sm:block">

    <p
      className="text-3xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:text-cyan-100"
      style={{
        fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
        fontStyle: "italic",
        fontWeight: "500",
      }}
    >
      Sasikumar S
    </p>

    <p className="mt-0.5 text-[7px] uppercase tracking-[0.32em] text-cyan-400">
      Python Full Stack Developer
    </p>

  </div>

</a>


    {/* Navigation */}

    {/* Navigation */}

<div className="hidden items-center gap-7 md:flex">

  {/* Home - Active */}

  <a
    href="#home"
    className="group relative py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:text-cyan-300"
  >
    Home

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] transition-all duration-300 group-hover:w-full" />
  </a>


  {/* About */}

  <a
    href="#about"
    className="group relative py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
  >
    About

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-full" />
  </a>


  {/* Skills */}

  <a
    href="#skills"
    className="group relative py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
  >
    Skills

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-full" />
  </a>


  {/* Projects */}

  <a
    href="#projects"
    className="group relative py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
  >
    Projects

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-full" />
  </a>


  {/* Journey */}

  <a
    href="#journey"
    className="group relative py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
  >
    Journey

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-full" />
  </a>


  {/* Contact */}

  <a
    href="#contact"
    className="group relative py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
  >
    Contact

    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-full" />
  </a>

</div>


    {/* Contact Button */}

    <a
      href="#contact"
      className="group/talk relative flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/[0.07] px-4 py-2 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
    >

      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover/talk:translate-x-full" />

      <FaEnvelope className="relative transition-transform duration-300 group-hover/talk:rotate-12" />

      <span className="relative">
        Let's Talk
      </span>

    </a>

  </nav>

</header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main id="home">

        <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-32">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT */}

            <div>

              {/* Availability */}

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-xs font-medium text-emerald-300">
                  Open to opportunities
                </span>

              </div>

              {/* Role */}

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
                Python Full Stack Developer
              </p>

              {/* Heading */}

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">

                Building

                <span className="block text-slate-300">
                  useful digital
                </span>

                <span className="relative inline-block text-white">

                  experiences

                  <span className="absolute -bottom-2 left-0 h-0.75 w-2/3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                </span>

                <span className="text-cyan-400">.</span>

              </h1>

              {/* Description */}

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">

                I'm Sasikumar S, a Python Full Stack Developer focused on
                building practical web applications using Django, React.js,
                REST APIs and modern frontend technologies.

              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
                >
                  Explore my work

                  <FaArrowRight className="transition group-hover:translate-x-1" />

                </a>

                <a
                  href="/resume.pdf"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/5"
                >
                  <FaDownload />

                  Download Resume
                </a>

              </div>

              {/* Social */}

              <div className="mt-10 flex items-center gap-5">

                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
                  Connect
                </span>

                <div className="h-px w-8 bg-white/10" />

                <a
                  href="https://github.com/sasikumardev26"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition hover:scale-110 hover:text-white"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition hover:scale-110 hover:text-[#0A66C2]"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href="https://www.instagram.com/_s_a_s_i_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition hover:scale-110 hover:text-pink-400"
                >
                  <FaInstagram size={19} />
                </a>

              </div>

            </div>

            {/* RIGHT - PROFILE */}

            <div className="relative mx-auto w-full max-w-md">

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-cyan-400/8 blur-[90px]" />

              {/* Handwritten style text */}

              <div className="absolute -left-2 top-0 z-20 hidden -rotate-6 sm:block">

                <p className="font-serif text-xl italic text-white">
                  Keep
                </p>

                <p className="font-serif text-xl italic text-white">
                  Building...
                </p>

                <div className="ml-10 mt-1 h-8 w-8 rotate-45 border-b border-l border-cyan-400" />

              </div>

              {/* Available card */}

              <div className="absolute -right-3 top-6 z-20 rounded-2xl border border-white/10 bg-[#101720]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                  <div>

                    <p className="text-xs font-semibold text-emerald-300">
                      Available
                    </p>

                    <p className="text-[9px] text-slate-500">
                      for new opportunities
                    </p>

                  </div>

                </div>

              </div>

              {/* Main Photo */}

              <div className="relative mx-auto h-105 w-77.5 sm:h-125 sm:w-92.5">

                {/* Outer cyan ring */}

                <div className="absolute inset-0 rounded-[45%] border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.12)]" />

                <div className="absolute inset-2.25 rounded-[45%] border border-cyan-300/20" />

                {/* Photo */}

                <div className="absolute inset-4.5 overflow-hidden rounded-[43%] border border-white/10 bg-white">

                  <img
                    src="/profile.jpg"
                    alt="Sasikumar S"
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                </div>

                {/* Name */}

                <div className="absolute -bottom-5 -right-10 z-20 hidden sm:block">

                  <p className="font-serif text-5xl italic text-white drop-shadow-lg">
                    Sasikumar S
                  </p>

                  <p className="mt-1 text-right text-[9px] uppercase tracking-[0.3em] text-cyan-400">
                    Turn ideas into
                  </p>

                  <p className="text-right text-[9px] uppercase tracking-[0.3em] text-slate-500">
                    real-world solutions
                  </p>

                </div>

              </div>

              {/* Tech card */}

              <div className="relative z-30 mx-auto mt-8 flex w-fit items-center gap-6 rounded-2xl border border-white/10 bg-[#0d141d]/95 px-6 py-4 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <FaPython
                    className="text-yellow-300"
                    size={28}
                  />

                  <div>

                    <p className="text-sm font-semibold">
                      Python
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Backend
                    </p>

                  </div>

                </div>

                <div className="h-9 w-px bg-white/10" />

                <div className="flex items-center gap-3">

                  <FaReact
                    className="text-cyan-400"
                    size={28}
                  />

                  <div>

                    <p className="text-sm font-semibold">
                      React
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Frontend
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="border-y border-white/6 bg-white/1.5">

          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

            <div className="border-r border-white/6 px-6 py-8 text-center">

              <p className="text-2xl font-bold text-cyan-400">
                01
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Featured Project
              </p>

            </div>

            <div className="border-b border-white/6 px-6 py-8 text-center md:border-b-0 md:border-r">

              <p className="text-2xl font-bold">
                05+
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Core Technologies
              </p>

            </div>

            <div className="border-r border-white/6 px-6 py-8 text-center">

              <p className="text-2xl font-bold">
                2026
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Graduation
              </p>

            </div>

            <div className="px-6 py-8 text-center">

              <p className="text-2xl font-bold text-cyan-400">
                ∞
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Learning Mindset
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="px-6 py-28"
        >

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  01 / About
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">

                  More than

                  <span className="block text-cyan-400">
                    just code.
                  </span>

                </h2>

              </div>

              <div>

                <p className="text-lg leading-9 text-slate-300">

                  I enjoy turning ideas into functional applications.
                  My approach is simple — understand the problem,
                  design a clean solution, build it carefully and
                  keep improving it.

                </p>

                <p className="mt-6 leading-8 text-slate-500">

                  My development journey has taken me from programming
                  fundamentals to full-stack application development.
                  I'm particularly interested in backend architecture,
                  API development, authentication and building useful
                  frontend experiences.

                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">

                  <div>

                    <p className="text-sm font-semibold">
                      B.Tech IT
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Information Technology
                    </p>

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Full Stack
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Python + React
                    </p>

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Focus
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Real-world applications
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          id="skills"
          className="border-y border-white/6 bg-[#080d14] px-6 py-28"
        >

          <div className="mx-auto max-w-6xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              02 / Expertise
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <h2 className="text-4xl font-bold sm:text-5xl">
                My toolkit
              </h2>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                Technologies I use to design, develop and connect
                modern web applications.
              </p>

            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {skills.map((skill) => (

                <div
                  key={skill.title}
                  className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/2.5"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                      {skill.icon}
                    </div>

                    <span className="text-xs text-slate-700">
                      {skill.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {skill.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {skill.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-1.5 text-[10px] text-slate-400"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

            {/* Tech strip */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              {technologies.map((technology) => (

                <div
                  key={technology.name}
                  className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/2 px-4 py-2 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-white"
                >

                  {technology.icon}

                  {technology.name}

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECT
        ===================================================== */}

        <section
          id="projects"
          className="px-6 py-28"
        >

          <div className="mx-auto max-w-6xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              03 / Selected Work
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <h2 className="text-4xl font-bold sm:text-5xl">
                Career Connect
              </h2>

              <a
                href="https://github.com/sasikumardev26/Career-Connect"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                View on GitHub
                <FaArrowUpRightFromSquare size={12} />
              </a>

            </div>

            <article className="group mt-14 overflow-hidden rounded-3xl border border-white/8 bg-white/2">

              <div className="grid lg:grid-cols-2">

                {/* Project Visual */}

                <div className="relative flex min-h-100 items-center justify-center overflow-hidden bg-linear-to-br from-cyan-500/8 via-[#080d14] to-blue-600/8 p-8">

                  <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-cyan-400/6 blur-3xl" />

                  <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#080d14] p-4 shadow-2xl transition duration-500 group-hover:-translate-y-2">

                    <div className="flex items-center gap-2 border-b border-white/10 pb-3">

                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />

                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />

                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                      <span className="ml-3 text-[9px] text-slate-600">
                        career-connect
                      </span>

                    </div>

                    <div className="py-8">

                      <div className="h-3 w-28 rounded bg-cyan-400/30" />

                      <div className="mt-4 h-7 w-64 rounded bg-white/10" />

                      <div className="mt-3 h-2 w-52 rounded bg-white/5" />

                      <div className="mt-8 grid grid-cols-3 gap-3">

                        <div className="h-20 rounded-xl bg-white/4" />

                        <div className="h-20 rounded-xl bg-white/4" />

                        <div className="h-20 rounded-xl bg-white/4" />

                      </div>

                      <div className="mt-4 h-3 w-full rounded bg-white/4" />

                      <div className="mt-2 h-3 w-4/5 rounded bg-white/4" />

                    </div>

                  </div>

                </div>

                {/* Project Details */}

                <div className="flex flex-col justify-center p-8 sm:p-12">

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Featured Project
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    Career Connect
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">

                    A full-stack job portal designed to connect job seekers
                    and recruiters through a single platform.

                    The application includes authentication, job management,
                    applications, recruiter workflows and admin management.

                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {[
                      "React.js",
                      "Tailwind CSS",
                      "Python",
                      "Django",
                      "DRF",
                      "MySQL",
                      "JWT",
                    ].map((technology) => (

                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                  <a
                    href="https://github.com/sasikumardev26/Career-Connect"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex w-fit items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    View Project
                    <FaArrowUpRightFromSquare size={13} />
                  </a>

                </div>

              </div>

            </article>

          </div>

        </section>

        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section
          id="journey"
          className="border-y border-white/6 bg-[#080d14] px-6 py-28"
        >

          <div className="mx-auto max-w-6xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              04 / Journey
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Education & experience
            </h2>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">

              {/* Education */}

              <div className="rounded-2xl border border-white/8 bg-white/2 p-7 transition hover:border-cyan-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/8 text-cyan-400">
                  <FaGraduationCap size={20} />
                </div>

                <p className="mt-7 text-xs uppercase tracking-widest text-cyan-400">
                  2026
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  B.Tech — Information Technology
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Nehru Institute of Engineering and Technology
                  <br />
                  Anna University
                </p>

              </div>

              {/* Training */}

              <div className="rounded-2xl border border-white/8 bg-white/2 p-7 transition hover:border-cyan-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/8 text-cyan-400">
                  <FaBriefcase size={18} />
                </div>

                <p className="mt-7 text-xs uppercase tracking-widest text-cyan-400">
                  Training
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  Python Full Stack Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  QTree Technologies
                  <br />
                  Practical full-stack development training
                </p>

              </div>

              {/* Certifications */}

              <div className="rounded-2xl border border-white/8 bg-white/2 p-7 transition hover:border-cyan-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/8 text-cyan-400">
                  <FaCertificate size={18} />
                </div>

                <p className="mt-7 text-xs uppercase tracking-widest text-cyan-400">
                  Certifications
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  Continuous Learning
                </h3>

                <div className="mt-4 space-y-2 text-sm text-slate-500">

                  <p>Web Development</p>

                  <p>Fullstack Development</p>

                  <p>Python development</p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-5xl">

            <div className="grid items-center gap-10 rounded-3xl border border-white/8 bg-white/2 p-8 sm:p-12 lg:grid-cols-[1fr_auto]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  05 / Contact
                </p>

                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

                  Have an idea?

                  <span className="block text-cyan-400">
                    Let's build it.
                  </span>

                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-500">

                  I'm interested in opportunities where I can contribute
                  to meaningful software projects, learn from experienced
                  teams and continue growing as a developer.

                </p>

              </div>

              <div className="flex flex-col gap-3">

                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaEnvelope />
                  Get In Touch
                </a>

                <a
                  href="https://github.com/sasikumardev26"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/6 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

          {/* Footer logo */}

          <div className="flex items-center gap-3">

            <div className="h-9 w-9 overflow-hidden rounded-full border border-cyan-400">

              <img
                src="/profile.jpg"
                alt="Sasikumar S"
                className="h-full w-full object-cover object-top"
              />

            </div>

            <div>

              <p className="text-sm font-semibold">
                Sasikumar S
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-slate-600">
                Full Stack Developer
              </p>

            </div>

          </div>

          <p className="text-xs text-slate-600">
            Designed & built with React.js + Tailwind CSS
          </p>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/sasikumardev26"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sasikumar-s-55b5aa2a1/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/_s_a._.s_i_"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-pink-400"
            >
              <FaInstagram />
            </a>

            <a
              href="#home"
              className="ml-2 border-l border-white/10 pl-4 text-xs text-slate-500 hover:text-white"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default App;