import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./translation.en";
import translationFr from "./translation.fr";
import translationKo from "./translation.ko";
import translationJp from "./translation.jp";

const resource = {
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
  ko: {
    translation: translationKo,
  },
  jp: {
    translation: translationJp,
  },
};
i18n.use(initReactI18next).init({
  resources: resource,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  //  keySeparator:false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
