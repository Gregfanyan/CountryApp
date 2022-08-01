import { createGlobalStyle, ThemeProps } from 'styled-components'

type DefaultTheme = {
    backgroundColor: string
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps<DefaultTheme>) =>
        props.theme.backgroundColor};
  }
`
