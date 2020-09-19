import React from 'react'

export const themes = {
  light: {
    foreground: 'lightgrey',
  },
  dark: {
    foreground: 'darkgrey',
  },
}

export default React.createContext({
  theme: themes.light,
  switchTheme: () => {},
})
