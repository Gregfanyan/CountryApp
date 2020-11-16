import { combineReducers } from 'redux'
import ProductReducer from './Products/ProductReducer'
import { themeReducer } from './Theme/ThemeReducer'

const rootReducer = combineReducers({
  products: ProductReducer,
  theme: themeReducer,
})

export default rootReducer
