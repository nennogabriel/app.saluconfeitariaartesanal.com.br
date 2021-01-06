import React from "react"
import { chakra, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Container, DefaultLayout } from "../../components"
import { IState } from "../../store"
import { ICartItem } from "../../store/modules/cart/types"

import CartItem from "../../components/CartItem"

const Carrinho: React.FC = () => {
  const cartItems = useSelector<IState, ICartItem[]>(state => state.cart.items)

  return (
    <DefaultLayout>
      <Container>
        <Heading align="center" py={8}>
          Carrinho
        </Heading>
        {cartItems.length > 0 ? (
          <chakra.table w="100%">
            <chakra.thead>
              <chakra.tr>
                <chakra.th>Produto</chakra.th>
                <chakra.th>Quantidade</chakra.th>
                <chakra.th>Subtotal</chakra.th>
                <chakra.th></chakra.th>
              </chakra.tr>
            </chakra.thead>
            <chakra.tbody align="center">
              {cartItems.map(item => (
                <CartItem key={item.product.id} cartItem={item}></CartItem>
              ))}
            </chakra.tbody>
          </chakra.table>
        ) : (
          <Text py={10} align="center">
            Carrinho vazio :(
          </Text>
        )}
      </Container>
    </DefaultLayout>
  )
}

export default Carrinho
