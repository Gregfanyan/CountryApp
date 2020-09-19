import React from 'react'

import { CountryProps } from '../../types'

import './CountryList.scss'

export default function CountryList({
  population,
  name,
  region,
  language,
}: CountryProps) {
  return (
    <div className="CountryList">
      <div className="countryName">{name}</div>
      <div className="population">{population}</div>
      <div className="language">{language}</div>
      <div className="region">{region}</div>
    </div>
  )
}
