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

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
            <div>
                <ViewCountry country={country} />
            </div>
        </div>
    )
}
export default SingleCountry
