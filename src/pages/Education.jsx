import { useTranslation } from 'react-i18next'
import { FaFileDownload, FaGraduationCap } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import educationData from '../data/education.json'

function Education() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div>
      <h1>🎓 Education & Courses</h1>
      <VerticalTimeline>
        {educationData.map(item => (
          <VerticalTimelineElement
            key={item.id}
            date={`${item.startDate} – ${item.endDate}`}
            iconStyle={{ background: '#6f42c1', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3>{item.degree[lang]}</h3>
            <h4>{item.institution}, {item.location}</h4>
            <p>{item.description[lang]}</p>
            {item.certificate && (
              <a
                href={item.certificate}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '10px' , marginLeft: '10px' }}
              >
                <FaFileDownload style={{ marginRight: '5px' }} />
                Download Certificate
              </a>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;