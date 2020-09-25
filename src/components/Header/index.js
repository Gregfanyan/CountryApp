import React from 'react'

import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <ul className="HeadtableRow">
        <li>Flag</li>
        <li>Name</li>
        <li>Language</li>
        <li>Population</li>
        <li>Region</li>
      </ul>
    </div>
  )
}
