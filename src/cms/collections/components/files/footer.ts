import { CmsCollectionFile } from "netlify-cms-core"
import { componentKeyField, imageField, linkField } from "../../../schemas"

const footerCollectionFile: CmsCollectionFile = {
  file: "content/components/footer.mdx",
  label: "Footer",
  name: "footer",
  fields: [
    { ...componentKeyField, options: ["footer"], default: ["footer"] },
    {
      ...imageField,
      label: "Logo",
      name: "logo",
    },
    {
      label: "Links Lists",
      name: "linksLists",
      widget: "list",
      min: 1,
      max: 2,
      fields: [
        { label: "Title", name: "title" },
        {
          label: "Links List",
          name: "linksList",
          widget: "list",
          max: 7,
          fields: [{ label: "Label", name: "label" }, linkField],
        },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

export default footerCollectionFile
