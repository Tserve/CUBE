/**
 * node_modules
 */
import { convert } from "@agreed/typed"

/**
 * modules
 */
import { settingsGet } from "./settings/get"
import { usersMeGet } from "./users/me/get"
import { articlesImagesPost } from "./images/post"
import { settingsPut } from "./settings/put"

/**
 * main
 */
const agrees = [
  ...settingsGet,
  ...settingsPut,
  ...usersMeGet,
  ...articlesImagesPost,
]

module.exports = convert(...agrees)
