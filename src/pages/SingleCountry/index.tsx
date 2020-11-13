import React, { useState } from 'react'
import useCountries from '../../Hooks/useCountries'
import { useParams, useHistory } from 'react-router-dom'
import { RouteParam } from '../../types'

import ViewCountry from '../../components/ViewCountry'

const SingleCountry = () => {
  const [search] = useState('')
  const [data] = useCountries(search, '')
  const { id } = useParams<RouteParam>()

  let history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/')
    }
  }

  const country = data.find((country: any) => country.name === id)
  if (!country) {
    return <div>No country</div>
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <div>
        <ViewCountry
          name={country.name}
          region={country.region}
          population={country.population}
          language={country.languages.map((lang: any) => lang.name)}
          flagUrl={country.flag}
        />
      </div>
    </div>
  )
}
export default SingleCountry
