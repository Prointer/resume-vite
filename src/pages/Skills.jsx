import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import skillsData from '../data/skills.json'
import '../styles/Skills.css'

import {
	FaBootstrap, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5,
	FaLinux, FaNodeJs, FaPaintBrush, FaPython, FaReact,
	FaUsers, FaWindows
} from 'react-icons/fa'

import {
	SiJavascript, SiKubernetes, SiPostman,
	SiTailwindcss, SiVite
} from 'react-icons/si'

import { BiConversation } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { GiBrain, GiFlexibleStar, GiPuzzle } from 'react-icons/gi'
import { GrMysql } from 'react-icons/gr'
import { HiOutlineChartBar } from 'react-icons/hi'
import { MdHearing } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'

const iconMap = {
  FaReact, SiJavascript, FaPython, FaHtml5, FaCss3Alt,
  SiVite, FaGitAlt, FaNodeJs, GrMysql, SiTailwindcss,
  FaBootstrap, SiPostman, FaWindows, FaLinux, FaDocker,
  SiKubernetes, FaUsers, MdHearing, GiPuzzle, GiFlexibleStar,
  FaPaintBrush, BiConversation, GiBrain, BsSearch, RiTeamLine,
  HiOutlineChartBar
};

function Skills() {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05 }
    }),
    hover: { scale: 1.05 }
  };


  const renderCards = (skills, category) =>
    skills.map((skill, index) => {
      const Icon = iconMap[skill.icon];
      return (
        <div key={skill.name} className="skill-wrapper">
          <motion.div
            className="skill-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
            onMouseEnter={()=> setHoveredSkill(skill.name)}
						onMouseLeave={()=> setHoveredSkill(null)}
          >
            {Icon && <Icon />}
          </motion.div>

          <div className="skill-bar-wrapper">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.level}%` }}
            />
          </div>

          {hoveredSkill === skill.name && (
            <div className="skill-popup">
              <strong>{skill.name}</strong><br />
              Level: {skill.level}%
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="skills-wrapper">
      <h1>{t('skills.title')}</h1>

      <section>
        <h2>Hard Skills</h2>
        <div className="skills-grid">
          {renderCards(skillsData.hard, 'hard')}
        </div>
      </section>

      <section>
        <h2>Soft Skills</h2>
        <div className="skills-grid">
          {renderCards(skillsData.soft, 'soft')}
        </div>
      </section>
    </div>
  );
}

export default Skills;