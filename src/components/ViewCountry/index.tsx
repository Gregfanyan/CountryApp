import React from 'react'

function ViewCountry({ name, region, population, language, flagUrl }: any) {
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
