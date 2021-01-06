import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  bodyField,
  metadataObject,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    widget: "select",
    options: [{ label: "Produtos", value: "produtos" }],
    default: ["produtos"],
  },
  slugField,
  { label: "Nome do produto", name: "title" },
  {
    label: "Category",
    name: "category",
    widget: "select",
    options: ["comida", "bebida"],
  },
  {
    label: "Image",
    name: "image",
    widget: "image",
    required: false,
  },
  {
    label: "Preço",
    name: "price",
    widget: "number",
    value_type: "float",
    min: 0,
    // hint:
    //   "O número será dividido por 100 para exibir no site, Portanto para colocar um produto a R$ 10,00 escreva 1000 na caixa de preço.",
    required: false,
  },
  { ...bodyField, required: false },
  metadataObject,
]

const collection: CmsCollection = {
  label: "Produtos",
  label_singular: "produto",
  name: "produto",
  folder: "content/produtos",
  create: true,
  delete: true,
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img/produtos",
  public_folder: "/img/produtos",
  summary: "{{title}} ({{price}}) - {{category}} {{loja}}",
  sortable_fields: ["title", "metadata.dateModified"],
  fields,
}

export default collection
