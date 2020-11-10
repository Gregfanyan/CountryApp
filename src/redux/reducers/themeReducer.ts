import * as Actions from '../actions/themeActions'
import { darkTheme } from '../../ThemeSelector/Themes/Themes'

const initialState = {
  theme: darkTheme,
}

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign(
        {},
        {
          theme: action.payload,
        }
      )
    default:
      return state
  }
}
