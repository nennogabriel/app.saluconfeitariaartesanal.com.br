export interface IProduct {
  id: string
  title: string
  price: number
  slug: string
  category: string
  image?: string
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}
