import axios from 'axios'
import { Dispatch } from 'redux'

import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
    CountryActions,
    ADD_COUNTRY,
    REMOVE_COUNTRY,
    Country,
} from '../../types/CountryType'

export const fetchCountryRequest = () => {
    return {
        type: FETCH_COUNTRY_REQUEST,
    }
}

export const fetchCountrySuccess = (countries: Country[]) => {
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: countries,
    }
}

export const fetchCountryFailure = (error: any) => {
    return {
        type: FETCH_COUNTRY_FAILURE,
        payload: error,
    }
}

export const addCountry = (country: Country): CountryActions => {
    return {
        type: ADD_COUNTRY,
        payload: {
            country,
        },
    }
}
export const removeCountry = (country: Country): CountryActions => {
    return {
        type: REMOVE_COUNTRY,
        payload: {
            country,
        },
    }
}

export const fetchCountries = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchCountryRequest())
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                dispatch(fetchCountrySuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchCountryFailure(error.message))
            })
    }
}
