import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// 自动设置语言
export const navLang = navigator.language
export const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
export const lang = window.localStorage.getItem('language') || localLang || 'zh-CN'

export const messages = {
  en: Object.assign({ message: 'hello' }, enLocale),
  zh: Object.assign({ message: '你好' }, zhLocale)
}

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages,
  silentTranslationWarn: true
})
