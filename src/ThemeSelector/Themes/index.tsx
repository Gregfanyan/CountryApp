import React from 'react'
import { useDispatch } from 'react-redux'

import { darkTheme, lightTheme, partyTheme } from './Themes'
import { applyTheme } from '../../redux/Theme/ThemeActions'
import { StyledButton, ButtonDiv } from './StyledThemes'
import { ThemeProps } from '../../types/ui'

const ThemeSelector = () => {
    const dispatch = useDispatch()

    const changeTheme = (theme: ThemeProps) => {
        dispatch(applyTheme(theme))
    }

    return (
        <ButtonDiv>
            <StyledButton
                style={{ backgroundColor: '#333333' }}
                className="btn"
                onClick={() => changeTheme(darkTheme)}
            ></StyledButton>
            <StyledButton
                style={{ backgroundColor: '#C9C9C9' }}
                className="btn"
                onClick={() => changeTheme(lightTheme)}
            ></StyledButton>
            <StyledButton
                style={{ backgroundColor: '#490866' }}
                className="btn"
                onClick={() => changeTheme(partyTheme)}
            ></StyledButton>
        </ButtonDiv>
    )
}

export default ThemeSelector
