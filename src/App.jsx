import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import Navigation from './components/Navigation'
import './styles/App.css'

function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
    else if (savedTheme === 'light') setDarkMode(false);
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.body.classList[darkMode ? 'add' : 'remove']('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className="app-wrapper">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} handleLanguageChange={handleLanguageChange} />

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
// This is the main entry point of the application.
// It sets up the router, dark mode, and language handling.
// The app includes navigation and routes to different pages like About, Projects, Education, Skills, and Contact.
// The dark mode state is saved in local storage and applied on initial load.
// The language can be changed using a dropdown, and the app supports multiple languages using i18next.
// The Navigation component is used to provide links to different sections of the site, along with a theme toggle and language selector.
// The main content is rendered based on the current route, with a default redirect to the About page.