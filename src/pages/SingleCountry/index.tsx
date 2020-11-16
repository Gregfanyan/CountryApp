import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { RouteParam } from '../../types'
import ViewCountry from '../../components/ViewCountry'
import { AppState } from '../../types/ProductType'

const SingleCountry = () => {
  const { id } = useParams<RouteParam>()
  const country = useSelector((state: AppState) =>
    state.products.products.find((p) => p.name === id)
  )

  let history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/')
    }
  }

  if (!country) {
    return <div>No country</div>
  }
  const { name, flag, languages, region, population } = country

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <div>
        <ViewCountry
          name={name}
          region={region}
          population={population}
          language={
            languages &&
            languages.map((lang: any, index) => (
              <div key={index}>
                {lang.name}
                <br />
              </div>
            ))
          }
          flagUrl={flag}
        />
      </div>
    </div>
  )
}
export default SingleCountry
