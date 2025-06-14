import { useTranslation } from 'react-i18next'
import { FaLink } from "react-icons/fa"
import projectsData from '../data/projects.json'
function Projects() {
	const { i18n , t} = useTranslation();
	const language = i18n.language;

	return (
		<div className="projects">
			<h1>{t(projectsData.title)}</h1>
			{projectsData.map((project)=>(
				<div key={project.id} className='project-item'>
					<h2>{project.title[language]}</h2>
					<p>
						{project.description[language]}
					</p>
					<a href={project.link} target='_blank' rel='noopener noreferrer'>{<FaLink/>}</a>
				</div>
			))}
		</div>
	);
}
export default Projects;
// This code defines a simple Projects page component in React that lists some example projects.