import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import en from './en.json';
import zh from './zh.json';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: en
            },
            zh: {
                translation: zh
            }
        },
        lng: "zh",
        interpolation: {
            escapeValue: false
        }
    });

type SupportedLocale = 'en' | 'zh'
export const useSetLocale = () => {
    const {i18n} = useTranslation()
    return (locale: SupportedLocale) => {
        i18n.changeLanguage(locale)
        // 切换语言时，修改根元素的字体
        const rootEl = document.getElementById('root')
        if (!rootEl) return
        rootEl.style.fontFamily = locale === 'zh' ? 'Kingnamype Yuanmo SC' : 'Jomhuria'
    }
}
export const useLocale = () => {
    const {t, i18n} = useTranslation()
    return {t, locale: i18n.language as SupportedLocale}
}

export default i18n;