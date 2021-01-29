import { load } from 'js-yaml'

import en from './en'
import ru from './ru'

module.exports = {
  en: load(en),
  ru: load(ru)
}
