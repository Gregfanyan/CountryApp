import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RouteParam } from '../../types/ui'
import ViewCountry from '../../components/ViewCountry'
import { AppState } from '../../types/CountryType'
import './SingleCountry.scss'

const SingleCountry = () => {
    const { id } = useParams<RouteParam>()
    const country = useSelector((state: AppState) =>
        state.countries.countries.find((p) => p.name === id)
    )

    return (
        <div className="singleItem">
            <div className="singleItem">
                <ViewCountry country={country} />
            </div>
        </div>
    )
}
export default SingleCountry
