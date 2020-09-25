import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { darkTheme, lightTheme, partyTheme } from './Themes'
import { applyTheme } from '../../redux/actions/themeActions'

import './Buttons.scss'

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
`

const ThemeSelector = () => {
  const dispatch = useDispatch()

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme))
  }

  return (
    <div className="styleButtons">
      <StyledButton
        style={{ backgroundColor: '#333333' }}
        className="btn"
        onClick={() => changeTheme(darkTheme)}
      ></StyledButton>
      <StyledButton
        style={{ backgroundColor: '#6aa' }}
        className="btn"
        onClick={() => changeTheme(lightTheme)}
      ></StyledButton>
      <StyledButton
        style={{ backgroundColor: '#490866' }}
        className="btn"
        onClick={() => changeTheme(partyTheme)}
      ></StyledButton>
    </div>
  )
}

export default ThemeSelector
