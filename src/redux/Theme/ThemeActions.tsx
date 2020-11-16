import { APPLY_THEME } from '../../types/ProductType'

export const applyTheme = (theme: any) => {
  return {
    type: APPLY_THEME,
    payload: theme,
  }
}
