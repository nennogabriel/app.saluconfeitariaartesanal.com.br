import CMS from "netlify-cms-app"

import { uiCollection } from "./collections/ui"
import {
  settingsCollection,
  settingsPreviewTemplate,
} from "./collections/settings"
import withChakra from "./withChakra"
import {
  componentsCollection,
  componentsPreview,
} from "./collections/components"
import { faviconCollection } from "./collections/favicon"
import { produtosCollection } from "./collections/produtos"

export const collections = [
  produtosCollection,
  componentsCollection,
  uiCollection,
  settingsCollection,
  faviconCollection,
]

export function registerPreviews() {
  CMS.registerPreviewTemplate("header", withChakra(componentsPreview.header))
  CMS.registerPreviewTemplate("footer", withChakra(componentsPreview.footer))
  CMS.registerPreviewTemplate(
    "manifest",
    withChakra(settingsPreviewTemplate.manifest)
  )
  CMS.registerPreviewTemplate(
    "colors",
    withChakra(settingsPreviewTemplate.colors)
  )
}
