export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE'
export const ADD_COUNTRY = 'ADD_COUNTRY'

export type Product = {
  population: number
  name: string
  region: string
  language: string
  flagUrl: string
}
export type ReceiveProductsAction = {
  type: typeof FETCH_COUNTRY_SUCCESS
  payload: {
    products: Product[]
  }
}

export type ProductActions =
  | ReceiveProductsAction
  | fetchProduct
  | fetchProductSuccess
  | fetchProductRequest

export type fetchProduct = {
  type: typeof FETCH_COUNTRY_FAILURE
  payload: {
    product: Product
  }
}

export type fetchProductRequest = {
  type: typeof FETCH_COUNTRY_REQUEST
  payload: {
    product: Product
  }
}

export type fetchProductSuccess = {
  type: typeof FETCH_COUNTRY_SUCCESS
  payload: {
    product: Product
  }
}
