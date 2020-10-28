import React from 'react'

import { CountryProps } from '../../types'

function ViewCountry({ name, region, population, language }: CountryProps) {
  console.log(language)
  return (
    <div>
      {name}
      {population}
      {region}
      {language}
    </div>
  )
}

export default ViewCountry
