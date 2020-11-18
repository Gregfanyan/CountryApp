import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import ThemeSelector from '../Themes'
import { GlobalStyle } from './StyledMain'

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
