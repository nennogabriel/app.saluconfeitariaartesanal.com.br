import React, { useCallback } from "react"
import { Button, chakra, Flex, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import {
  addQuantityToCartItem,
  removeProductFromCart,
  removeQuantityToCartItem,
} from "../store/modules/cart/actions"

import { ICartItem } from "../store/modules/cart/types"

interface CartItemProps {
  cartItem: ICartItem
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const handleAddQuantity = useCallback(() => {
    dispatch(addQuantityToCartItem(cartItem.product))
  }, [dispatch, cartItem])

  const handleRemoveQuantity = useCallback(() => {
    dispatch(removeQuantityToCartItem(cartItem.product))
  }, [dispatch, cartItem])

  const handleRemoveItem = useCallback(() => {
    dispatch(removeProductFromCart(cartItem.product))
  }, [dispatch, cartItem])

  return (
    <chakra.tr>
      <chakra.td>{cartItem.product.title}</chakra.td>
      <chakra.td>
        <Flex align="center">
          <Button
            type="button"
            rounded="50%"
            variant="ghost"
            onClick={handleRemoveQuantity}
          >
            -
          </Button>
          <Text as="span" px={4}>
            {cartItem.quantity}
          </Text>
          <Button
            type="button"
            rounded="50%"
            variant="ghost"
            onClick={handleAddQuantity}
          >
            +
          </Button>
        </Flex>
      </chakra.td>
      <chakra.td>
        {cartItem.product?.price >= 0
          ? (cartItem.product.price * cartItem.quantity).toFixed(2)
          : "Consulte"}
      </chakra.td>
      <chakra.td>
        <Button
          type="button"
          rounded="50%"
          variant="outline"
          onClick={handleRemoveItem}
        >
          x
        </Button>
      </chakra.td>
    </chakra.tr>
  )
}

export default CartItem
