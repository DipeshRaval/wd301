import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import engJson from "./locale/en.json"
import esJson from "./locale/es.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug : true,
        resources : {
            en : {...engJson},
            es : { ...esJson}
        },
        fallbackLng: 'en',
    });