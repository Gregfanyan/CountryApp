import React from 'react'

import { CountryProps } from '../../types'

function ViewCountry({
  name,
  region,
  population,
  language,
  flagUrl,
}: CountryProps) {
  console.log(language)
  return (
    <div>
      <div> {name}</div>
      <div> {population}</div>
      <div> {region}</div>
      <div> {language}</div>
      <div>
        <img src={flagUrl} alt="flag" />
      </div>
    </div>
  )
}

export default ViewCountry
