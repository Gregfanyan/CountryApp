import React, { useState } from 'react'
import useCountries from '../../Hooks/useCountries'
import { useParams, useHistory } from 'react-router-dom'
import { RouteParam } from '../../types'

const SingleCountry = () => {
  const [search, setSearch] = useState('')
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
  console.log('singlePAge', country)
  if (!country) {
    return <div>No country</div>
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <div>
        {country.name}
        {country.region}
        {country.population}
      </div>
    </div>
  )
}
export default SingleCountry
