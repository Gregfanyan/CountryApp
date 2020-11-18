import { APPLY_THEME } from '../../types/CountryType'

export const applyTheme = (theme: any) => {
    return {
        type: APPLY_THEME,
        payload: theme,
    }
}
