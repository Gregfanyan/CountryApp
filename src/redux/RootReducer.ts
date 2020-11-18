import { combineReducers } from 'redux'
import ProductReducer from './Countries/CountryReducer'
import { themeReducer } from './Theme/ThemeReducer'

const rootReducer = combineReducers({
    countries: ProductReducer,
    theme: themeReducer,
})

export default rootReducer
