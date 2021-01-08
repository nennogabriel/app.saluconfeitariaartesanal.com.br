import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { Container } from "../.."
import FormComponent from "./FormComponent"

export interface TemplateProps {
  data: {
    title: string
    image: string
    body: string
    isPreview?: boolean
  }
}

const CartForm: React.FC = () => {
  return (
    <Box bg="gray.100" color="black" py={10} mt={{ base: 0, md: "10%" }}>
      <Flex direction="column" align="center" w="100%">
        <Heading as="h2" mb={8}>
          Dados complementares
        </Heading>
        <FormComponent />
      </Flex>
    </Box>
  )
}

export default CartForm
