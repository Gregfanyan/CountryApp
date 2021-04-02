import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import ThemeSelector from '../Themes'
import { GlobalStyle } from './StyledMain'
import { AppState } from '../../types/CountryType'

function Main() {
    const theme = useSelector((state: AppState) => state.theme.theme)

    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle />
                <header>
                    <ThemeSelector></ThemeSelector>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default Main
