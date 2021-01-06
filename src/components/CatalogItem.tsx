import React, { useCallback } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addProductToCart } from "../store/modules/cart/actions"

import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
  product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])

  return (
    <Flex shadow="md" p={4} align="center">
      <Text flex="auto" fontSize="lg">
        {product.title}
      </Text>
      <Button type="button" onClick={handleAddProductToCart} variant="outline">
        Adicionar
      </Button>
    </Flex>
  )
}

export default CatalogItem
