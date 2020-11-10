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
      {name}
      {population}
      {region}
      {language}
      <img src={flagUrl} alt="flag" />
    </div>
  )
}

export default ViewCountry
