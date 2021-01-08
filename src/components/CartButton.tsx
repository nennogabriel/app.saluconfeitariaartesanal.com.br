import { Button } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "."
import { IState } from "../store"

const CartButton: React.FC = () => {
  const cartLen = useSelector<IState, number>(state => state.cart.items.length)
  return (
    <Button as={Link} href="/carrinho" colorScheme={"brand"} variant="outline">
      {cartLen === 0
        ? "Carrinho vazio"
        : cartLen > 1
        ? `${cartLen} itens no carrinho`
        : "1 item no carrinho"}
    </Button>
  )
}

export default CartButton
