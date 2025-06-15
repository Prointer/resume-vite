import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaGraduationCap } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'
import { MdContactPhone, MdDarkMode, MdLightMode } from 'react-icons/md'
import { RiPagesFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

import '../styles/Navigation.css'

function Navigation({ darkMode, setDarkMode, handleLanguageChange }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/about', icon: <IoHome size={28} />, label: t('menu.about') },
    { path: '/projects', icon: <RiPagesFill size={28} />, label: t('menu.projects') },
    { path: '/education', icon: <FaGraduationCap size={28} />, label: t('menu.education') },
    { path: '/skills', icon: <GiSkills size={28} />, label: t('menu.skills') },
    { path: '/contact', icon: <MdContactPhone size={28} />, label: t('menu.contact') }
  ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.path} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
            <Link to={item.path} className="nav-link">
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-controls">
        <motion.div
          className="theme-toggle"
          onClick={() => setDarkMode(prev => !prev)}
          initial={false}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </motion.div>

        <select
          className='language-select'
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">🇬🇧</option>
          <option value="ua">🇺🇦</option>
          <option value="pl">🇵🇱</option>
        </select>
      </div>
    </nav>
  )
}

export default Navigation
