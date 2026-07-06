import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Globe,
  Server,
  Layers,
  Sparkles,
  ArrowUpRight,
  Circle,
  Briefcase,
  Award,
  Users,
  Camera,
  Heart,
  BookOpen,
  MapPin,
  Calendar,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      color: "blue",
      skills: [
        { name: "React.js", level: "Advanced", icon: Code2 },
        { name: "JavaScript", level: "Advanced", icon: Sparkles },
        { name: "TypeScript", level: "Intermediate", icon: Layers },
        { name: "Tailwind CSS", level: "Advanced", icon: Palette },
        { name: "HTML & CSS", level: "Advanced", icon: Globe },
      ],
    },
    {
      category: "Backend & Tools",
      color: "emerald",
      skills: [
        { name: "PHP", level: "Intermediate", icon: Server },
        { name: "MySQL", level: "Intermediate", icon: Database },
        { name: "Git & GitHub", level: "Intermediate", icon: GitBranch },
      ],
    },
  ];

  const professionalSkills = [
    { name: "Software Development", icon: Code2 },
    { name: "UI/UX Design", icon: Palette },
    { name: "Responsive Web Design", icon: Globe },
    { name: "Problem Solving", icon: Sparkles },
    { name: "Backend Development", icon: Server },
    { name: "API Integration", icon: Layers },
    { name: "Photography", icon: Camera },
    { name: "Media Production", icon: BookOpen },
    { name: "Team Leadership", icon: Users },
    { name: "Community Training", icon: Heart },
  ];

  const experience = [
    {
      number: "01",
      icon: Code2,
      title: "Software Engineer",
      description:
        "Developing modern web applications using React, Tailwind CSS, JavaScript and backend technologies.",
      tags: ["React", "Full-Stack", "Web Apps"],
      period: "2023 — Present",
    },
    {
      number: "02",
      icon: Camera,
      title: "Photographer — RYSA",
      description:
        "Capturing community activities, sports events and creating visual stories through photography.",
      tags: ["Events", "Sports", "Storytelling"],
      period: "2022 — Present",
    },
    {
      number: "03",
      icon: Users,
      title: "Team Lead — RYSA Media",
      description:
        "Leading media activities, coordinating content creation and guiding creative projects.",
      tags: ["Leadership", "Media", "Coordination"],
      period: "2023 — Present",
    },
    {
      number: "04",
      icon: Heart,
      title: "Community Tech Builder",
      description:
        "Supporting coding mentorship, computer literacy and technology programs within the community.",
      tags: ["Mentorship", "Training", "Impact"],
      period: "2022 — Present",
    },
  ];

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-900">
      <Header />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-slate-50 via-white to-blue-50/30">
        {/* Subtle corporate grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient corporate glow */}
        <div className="absolute -top-40 left-1/4 w-160 h-100 bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-emerald-100/30 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8"
            >
              {/* Breadcrumb */}
              <motion.div className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">Home</span>
                <span className="text-slate-300">/</span>
                <span className="text-blue-600 font-semibold">Skills & Expertise</span>
              </motion.div>

              {/* Section Label */}
              <motion.div className="flex items-center gap-3">
                <div className="h-px w-12 bg-linear-to-r from-blue-600 to-emerald-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">
                  What I Bring to the Table
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                Technologies,
                <br />
                <span className="text-slate-400 font-light italic">creative skills</span>
                <br />
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  & experience.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                A comprehensive toolkit of technical abilities, professional
                competencies, and hands-on experience that help me build digital
                solutions, modern applications, and community projects.
              </motion.p>

              {/* Role Badges */}
              <motion.div className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  { icon: Code2, label: "React Developer" },
                  { icon: Briefcase, label: "Software Engineer" },
                  { icon: Camera, label: "Photographer" },
                ].map((role) => (
                  <div
                    key={role.label}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                  >
                    <role.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {role.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 space-y-4"
            >
              {/* Main Profile Card */}
              <div className="bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl -ml-16 -mb-16" />

                <div className="relative z-10 space-y-5">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                    <div className="relative">
                      <img
                        src="/MAX.jpg"
                        alt="Maxwell"
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white/30 shadow-lg"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Maxwell Mujukane</h3>
                      <div className="flex items-center gap-1.5 text-blue-100 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Nairobi, Kenya</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm font-semibold text-white">
                        Available for work
                      </span>
                    </div>
                    <p className="text-xs text-blue-100 ml-4.5">
                      Open to freelance & full-time opportunities
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-emerald-300" />
                        <span className="text-xs text-blue-100">Experience</span>
                      </div>
                      <p className="text-2xl font-bold text-white">3+ Years</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-emerald-300" />
                        <span className="text-xs text-blue-100">Projects</span>
                      </div>
                      <p className="text-2xl font-bold text-white">20+ Done</p>
                    </div>
                  </div>

                  {/* Skills Count */}
                  <div className="flex items-center justify-between bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-emerald-300" />
                      </div>
                      <span className="text-sm text-blue-100">Technical Skills</span>
                    </div>
                    <span className="text-lg font-bold text-white">8+</span>
                  </div>
                </div>
              </div>

              {/* Currently Focused Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">
                      Currently Focused On
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Advanced React Patterns
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Learning Progress</span>
                    <span className="font-bold text-blue-600">75%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-blue-600 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Code2, label: "React", color: "from-blue-500 to-blue-600" },
                  { icon: Palette, label: "Tailwind", color: "from-cyan-500 to-cyan-600" },
                  { icon: Database, label: "MySQL", color: "from-emerald-500 to-emerald-600" },
                  { icon: GitBranch, label: "Git", color: "from-orange-500 to-orange-600" },
                  { icon: Server, label: "Node.js", color: "from-green-500 to-green-600" },
                  { icon: Layers, label: "TypeScript", color: "from-blue-500 to-blue-600" },
                ].map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="group relative bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${tech.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <tech.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== TECHNICAL SKILLS ===================== */}
      <section className="relative py-24 px-6 md:px-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
                  01
                </span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">
                  Technical Skills
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-8"
            >
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Technologies I
                <br />
                <span className="italic font-light text-slate-400">work with.</span>
              </h2>
              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                A curated stack refined over years of building real products — chosen
                for reliability, speed, and developer experience.
              </p>
            </motion.div>
          </div>

          {/* Skills by Category */}
          <div className="space-y-10">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      category.color === "blue" ? "bg-blue-600" : "bg-emerald-500"
                    }`}
                  />
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-slate-700">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-xs text-slate-500">
                    {category.skills.length} technologies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                              skill.level === "Advanced"
                                ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                                : "bg-blue-50 text-blue-600 border-blue-200"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500">{category.category}</p>

                        {/* Progress bar */}
                        <div className="mt-4">
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: skill.level === "Advanced" ? "90%" : "65%",
                              }}
                              transition={{ duration: 1, delay: 0.3 + idx * 0.05 }}
                              viewport={{ once: true }}
                              className={`h-full rounded-full ${
                                skill.level === "Advanced"
                                  ? "bg-linear-to-r from-blue-600 to-emerald-500"
                                  : "bg-linear-to-r from-blue-400 to-blue-600"
                              }`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROFESSIONAL SKILLS ===================== */}
      <section className="relative py-24 px-6 md:px-10 bg-linear-to-b from-slate-50/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500 text-white text-xs font-bold">
                  02
                </span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600">
                  Professional Skills
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-8"
            >
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Beyond
                <br />
                <span className="italic font-light text-slate-400">the code.</span>
              </h2>
              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                A diverse set of professional competencies that complement technical
                expertise and drive project success.
              </p>
            </motion.div>
          </div>

          {/* Professional Skills Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {professionalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section className="relative py-24 px-6 md:px-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-bold">
                  03
                </span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-700">
                  Experience & Roles
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-8"
            >
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Where I've
                <br />
                <span className="italic font-light text-slate-400">made an impact.</span>
              </h2>
              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                A track record of meaningful contributions across engineering,
                media, and community development.
              </p>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    {/* Number & Icon */}
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        / {item.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7">
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Period */}
                    <div className="md:col-span-3 md:text-right">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        <span className="text-[11px] font-bold text-blue-700">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute -top-20 right-0 w-120 h-80 bg-emerald-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-0 w-120 h-80 bg-blue-400/30 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-8">
                <Circle className="w-1.5 h-1.5 fill-emerald-300 text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Let's collaborate
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5">
                Ready to build
                <br />
                <span className="italic font-light text-blue-100">something great?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-50 max-w-xl mx-auto mb-10">
                With these skills and experience, I'm ready to help you create
                modern digital solutions. Let's work together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 hover:gap-3"
                >
                  Start a project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/max-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}