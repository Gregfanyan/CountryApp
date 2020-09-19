import React, { useContext } from 'react'
import ThemeContext from './context'

import './ThemedButton.scss'

const ThemedButton = () => {
  const { switchTheme } = useContext(ThemeContext)

  return (
    <>
      <button className="btn" onClick={switchTheme}>
        Switch
      </button>
    </>
  )
}

export default ThemedButton
