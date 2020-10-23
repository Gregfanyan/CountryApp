import React from 'react'

import { HeaderProps } from '../../types'

import './Header.scss'

export default function Header({ setActiveFilter }: HeaderProps) {
  return (
    <div className="header">
      <ul className="HeadTableRow">
        <li>Flag</li>
        <li>
          <button onClick={() => setActiveFilter}>Name</button>
        </li>
        <li>Language</li>
        <li>Population</li>
        <li>Region</li>
      </ul>
    </div>
  )
}
