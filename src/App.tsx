'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Database, Code2, Server } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import img from "./components/img/profilepic-modified.jpg"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skills = [
    { name: "Frontend Development", icon: <Code2 className="w-6 h-6" />, items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { name: "Backend Development", icon: <Server className="w-6 h-6" />, items: ["Node.js", "Express", "RESTful APIs", "Recoil", "Next.js"] },
    { name: "Databases", icon: <Database className="w-6 h-6" />, items: ["MongoDB", "PostgreSQL", "MySQL"] }
  ]

  const projects = [
    {
      title: "Ez Pay",
      description: `Financial application for secure bank transfers and P2P payments with real-time transaction tracking.`,
      tech: ["TypeScript", "Express", "PostgreSQL", "Next.js", "Prisma", "Monorepo"],
      github: "https://github.com/prashantsaxe/Ez_Pay.git"
    },
    {
      title: "StreamSage",
      description: `Platform for tracking movies, TV shows, anime, and dramas with personalized recommendations.`,
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/Rutetid/StreamSage.git"
    },
    {
      title: "Library Management System",
      description: `MERN stack project for managing books, users, and administrative tasks in a library setting.`,
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/prashantsaxe/libarary_management_backend.git"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="fixed inset-0 pointer-events-none z-50"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)`
        }}
      />

      {/* Navigation */}
      <nav className="bg-black border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span
                className="text-xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Portfolio
              </motion.span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-20">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE1MTUxNSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzMzMiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              className="mb-8"
            >
              <Avatar className="w-40 h-40 mx-auto border-4 border-white shadow-lg">
                <AvatarImage src={img} alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              IIIT Nagpur | Batch 2026
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[Github, Linkedin, Mail].map((Icon, index) => {
                const links = [
                  "https://github.com/prashantsaxe?tab=overview&from=2024-10-01&to=2024-10-23",
                  "https://www.linkedin.com/in/prashant-saxena-131473193",
                  "mailto:bt22csd018@iiitn.ac.in"
                ];

                return (
                  <motion.a
                    key={index}
                    href={links[index]}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="bg-black text-white rounded-lg shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="leading-relaxed">
              I'm a passionate Full Stack Developer currently pursuing my B.Tech at IIIT Nagpur, with a strong foundation in both frontend and backend technologies. I specialize in building scalable and efficient web applications that deliver a seamless user experience. My expertise includes modern JavaScript frameworks like React and TypeScript on the frontend, and Node.js, Express, and RESTful APIs on the backend. With a deep understanding of database technologies such as MongoDB, PostgreSQL, and MySQL, I excel at designing robust, data-driven systems.
              <br /><br />
              As a computer geek, I constantly immerse myself in the tech world, exploring emerging tools and technologies. I'm always experimenting with new frameworks, staying updated on the latest trends in web development, and contributing to open-source projects. I find joy in solving complex problems, optimizing code, and refining performance—turning challenges into opportunities to grow and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white text-black rounded-full">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-2">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-black text-white border border-white/10">
                  <CardHeader>
                    
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
                      <a href={project.github} className="flex items-center">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg p-6 md:p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              >
                <Mail className="w-12 h-12 text-white" />
              </motion.div>
              <p className="text-gray-300">bt22csd018@iiitn.ac.in</p>
              <div className="flex space-x-4">
                {[Github, Linkedin].map((Icon, index) => {
                  const links = [
                    "https://github.com/prashantsaxe?tab=overview&from=2024-10-01&to=2024-10-23",
                    "https://www.linkedin.com/in/prashant-saxena-131473193"
                  ];

                  return (
                    <motion.a
                      key={index}
                      href={links[index]}
                      className="text-white hover:text-gray-300 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}