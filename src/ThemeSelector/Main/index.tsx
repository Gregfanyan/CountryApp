import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createStore } from 'redux'
import { useSelector } from 'react-redux'

import { darkTheme, lightTheme, partyTheme } from '../Themes/Themes'
import ThemeSelector from '../Themes/Buttons'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`

function Main() {
  const theme = useSelector((state: any) => state.theme)

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
