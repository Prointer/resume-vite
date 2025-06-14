import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


import { FaGraduationCap } from "react-icons/fa6"
import { GiSkills } from "react-icons/gi"
import { IoHome } from "react-icons/io5"
import { MdContactPhone } from "react-icons/md"
import { RiPagesFill } from "react-icons/ri"
import './styles/App.css'


function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const handleLanguageChange = (lang) =>{
    i18n.changeLanguage(lang.target.value);
  }
  // 1. Initialize darkMode state
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {setDarkMode(true);}
    else if (savedTheme === 'light') {setDarkMode(false);}
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);
  // 2. Apply dark mode class to body and save preference in localStorage
  useEffect(() => {
    document.body.classList[darkMode ? 'add' : 'remove']('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
   return (
    <Router>
      <div className="app-wrapper">
        <Sidebar>
          <Menu>
            <MenuItem icon={<IoHome />}>
              <Link to="/about">{t('menu.about')}</Link>
            </MenuItem>
            <MenuItem icon={<RiPagesFill />}>
              <Link to="/projects">{t('menu.projects')}</Link>
            </MenuItem>
            <MenuItem icon={<FaGraduationCap />}>
              <Link to="/education">{t('menu.education')}</Link>
            </MenuItem>
            <MenuItem icon={<GiSkills />}>
              <Link to="/skills">{t('menu.skills')}</Link>
            </MenuItem>
            <MenuItem icon={<MdContactPhone />}>
              <Link to="/contact">{t('menu.contact')}</Link>
            </MenuItem>
            <MenuItem onClick={() => setDarkMode(prev => !prev)}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </MenuItem>
            <MenuItem>
              <select onChange={handleLanguageChange} value={i18n.language}>
                <option value="en">🇬🇧 English</option>
                <option value="ua">🇺🇦 Українська</option>
                <option value="pl">🇵🇱 Polski</option>
              </select>
            </MenuItem>
          </Menu>
        </Sidebar>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
