import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  Product,
} from '../../types/ProductType'

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  }
}

export const fetchProductSuccess = (products: Product[]) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  }
}

export const fetchProductFailure = (error: any) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  }
}

export const addProduct = (product: Product): ProductActions => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}
export const removeProduct = (product: Product): ProductActions => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductRequest())
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        dispatch(fetchProductSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}
