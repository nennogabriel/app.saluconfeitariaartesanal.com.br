import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import { Footer, Header } from ".."

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh" width="100%">
      <Header />
      <Box as="section" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default DefaultLayout
