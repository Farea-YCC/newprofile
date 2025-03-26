import { useState, useEffect } from 'react';
import { Moon, Sun, Mouse, Award, Briefcase, Headphones, Mail, MessageSquare, Github, Linkedin, Twitter, ChevronRight, Code, Database, Smartphone } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Farea Al-Dhela'a
          </a>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-6">
              {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 
                             transition-colors relative after:content-[''] after:absolute after:bottom-0 
                             after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 
                             after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors transform hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-4 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 
                           leading-tight">
                Farea <span className="text-blue-600 dark:text-blue-400">Al-Dhela'a</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Full-Stack Developer
              </h2>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.linkedin.com/in/farea-al-dhela-a-9624b431a/"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="#about" className="btn-secondary">
                  About me
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden 
                            border-8 border-gray-200 dark:border-gray-700 
                            shadow-2xl transform hover:scale-105 transition-transform 
                            duration-300 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                            flex flex-col items-center animate-bounce-slow">
                <Mouse className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Scroll Down
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">My Intro</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform 
                          hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Award, title: 'Experience', subtitle: 'Years Working' },
                  { icon: Briefcase, title: 'Completed', subtitle: '10+ Projects' },
                  { icon: Headphones, title: 'Support', subtitle: 'Online 24/7' }
                ].map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="text-center p-6 bg-gray-100 dark:bg-gray-700 
                                            rounded-xl shadow-lg transform hover:scale-105 
                                            transition-all duration-300 border border-gray-200 
                                            dark:border-gray-600">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Computer Science professional passionate about software development. I create innovative 
                and effective applications and websites. With extensive experience in various programming 
                languages gained through university projects and internships, I excel in team environments 
                and strive for excellence in every project.
              </p>

              <a href="#contact" className="btn-primary">
                Contact Me
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">My Abilities</p>
            <h2 className="section-title">My Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Frontend Developer',
                skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
              },
              {
                icon: Database,
                title: 'Backend Developer',
                skills: ['PHP', 'Laravel', 'ASP.NET Core', 'Python', 'MySQL', 'SQL Server', 'Firebase']
              },
              {
                icon: Smartphone,
                title: 'Mobile Developer',
                skills: ['Flutter', 'Dart', 'Firebase']
              }
            ].map(({ icon: Icon, title, skills }) => (
              <div key={title} className="skill-card">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">Get in touch</p>
            <h2 className="section-title">Contact Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'faraa717281413@gmail.com',
                  link: 'mailto:faraa717281413@gmail.com'
                },
                {
                  icon: MessageSquare,
                  title: 'WhatsApp',
                  value: '+967717281413',
                  link: 'https://api.whatsapp.com/send?phone=+967717281413&text=Hello!'
                }
              ].map(({ icon: Icon, title, value, link }) => (
                <div key={title} className="contact-card">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{value}</p>
                  <a 
                    href={link}
                    className="text-blue-600 dark:text-blue-400 flex items-center gap-2 
                             hover:underline group"
                  >
                    Write me 
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 
                                           transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            <form className="space-y-6">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', type: 'email', placeholder: 'Your email' }
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                  </label>
                  <input 
                    type={type}
                    className="form-input"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  className="form-input"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0 
                         hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Farea Al-Dhela'a
            </h3>
            
            <div className="flex gap-6">
              {[
                { icon: Github, link: 'https://github.com/Farea-YCC' },
                { icon: Linkedin, link: 'https://www.linkedin.com/in/farea-al-dhela-a-9624b431a/' },
                { icon: Twitter, link: 'https://x.com/Flutter_Dev717?s=08' }
              ].map(({ icon: Icon, link }) => (
                <a 
                  key={link}
                  href={link}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                           dark:hover:text-blue-400 transform hover:scale-110 
                           transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            Made with ❤️ by Farea AL-Dhela'a | All Rights Reserved © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;