import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import pl from './pl.json'
import ua from './ua.json'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources:{
			en: { translation: en },
			ua: { translation: ua },
			pl: { translation: pl }
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false // React already does escaping
		},
	});
export default i18n;