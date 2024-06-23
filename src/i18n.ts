import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

const i18n = new I18n({
  en,
  fr,
});

i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

export default i18n;
