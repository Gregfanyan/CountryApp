import React from 'react'

import { SearchBarProps } from '../../types'

import './SearchBar.scss'

export default function Searchbar({ handleChange, search }: SearchBarProps) {
  return (
    <div className="SearchBar">
      <input
        className="input"
        type="text"
        placeholder="search country ..."
        value={search}
        onChange={handleChange}
      />
    </div>
  )
}
