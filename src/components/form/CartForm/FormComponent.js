import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react"
import { Form } from "@unform/web"
import React, { useCallback, useRef } from "react"
import { navigate } from "gatsby"
import { FaTelegramPlane } from "react-icons/fa"
import * as Yup from "yup"
import getValidationErrors from "../../../utils/getValidationErrors"
import MetaInput from "../MetaInput"
import { MetaTextarea } from "../.."

import { phone } from "../../../../content/settings/info.json"
import { useSelector } from "react-redux"

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  address: Yup.string().required("Endereço é obrigatório"),
  reference: Yup.string().required("Referencia é obrigatória"),
  description: Yup.string(),
})

function openInNewTab(url, query = {}) {
  var win = window.open(url + encode(query), "_blank")
  win.focus()
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormComponent = () => {
  const cartItems = useSelector(state => state.cart.items)
  const formRef = useRef()
  const handleSubmit = useCallback(
    async (data, { reset }) => {
      const { name, address, reference, description } = data
      let text = `${phone.message} \n*${name}* \n\n ${address} \n ${reference} \n------------\n Pedido \n------------\n`
      cartItems.forEach(item => {
        text += `${item.product.title} x ${item.quantity}\n`
      })
      text += `\n\n ${description}`

      openInNewTab("https://api.whatsapp.com/send?", {
        phone: phone.number,
        text,
      })
    },
    [formRef]
  )
  return (
    <Form
      schema={schema}
      name="cart"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Flex direction="column" maxW="600px" w="100%" color="black">
        <MetaInput name="name" placeholder="Digite seu nome" />
        <MetaTextarea name="address" placeholder="Endereço de entrega" />
        <MetaInput name="reference" placeholder="Ponto de referência" />
        <MetaTextarea
          name="description"
          placeholder="Observações (opicional)"
        />
        <Button variant="solid" colorScheme="brand" type="submit">
          Solicitar por Whatsapp
        </Button>
      </Flex>
    </Form>
  )
}

export default FormComponent
