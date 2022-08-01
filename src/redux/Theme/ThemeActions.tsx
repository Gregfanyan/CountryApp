import { APPLY_THEME } from '../../types/CountryType'
import { ThemeProps } from '../../types/ui'

export const applyTheme = (theme: ThemeProps) => {
    return {
        type: APPLY_THEME,
        payload: theme,
    }
}
