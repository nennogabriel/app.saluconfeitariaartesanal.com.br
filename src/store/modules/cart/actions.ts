import { IProduct } from "./types"

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  }
}

export function addQuantityToCartItem(product: IProduct) {
  return {
    type: "ADD_QTD_TO_CART_ITEM",
    payload: {
      product,
    },
  }
}

export function removeQuantityToCartItem(product: IProduct) {
  return {
    type: "REMOVE_QTD_TO_CART_ITEM",
    payload: {
      product,
    },
  }
}

export function removeProductFromCart(product: IProduct) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: {
      product,
    },
  }
}
