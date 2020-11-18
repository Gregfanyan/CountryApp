import { darkTheme } from '../../ThemeSelector/Themes/Themes'
import { APPLY_THEME } from '../../types/CountryType'

const initialState = {
    theme: darkTheme,
}

export const themeReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case APPLY_THEME:
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
