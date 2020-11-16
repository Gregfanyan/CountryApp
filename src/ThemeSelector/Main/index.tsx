import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import ThemeSelector from '../Themes'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`

function Main() {
  const theme = useSelector((state: any) => state.theme.theme)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <header className="App-header">
          <ThemeSelector></ThemeSelector>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default Main
