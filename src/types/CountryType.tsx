export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const APPLY_THEME = 'APPLY_THEME'

export type Country = {
    population: number
    name: string
    region: string
    languages: string[]
    flags: {
        png: string
    }
}

export type MainTableProps = {
    countries: Country
}

export type ReceiveCountriesAction = {
    type: typeof FETCH_COUNTRY_SUCCESS
    payload: {
        countries: Country[]
    }
}

export type AddCountryAction = {
    type: typeof ADD_COUNTRY
    payload: {
        country: Country
    }
}

export type CountryActions =
    | ReceiveCountriesAction
    | fetchCountry
    | fetchCountrySuccess
    | fetchCountryRequest
    | AddCountryAction
    | RemoveCountryAction

export type fetchCountry = {
    type: typeof FETCH_COUNTRY_FAILURE
    payload: {
        country: Country
    }
}

export type fetchCountryRequest = {
    type: typeof FETCH_COUNTRY_REQUEST
    loading: boolean
    payload: {
        country: Country
    }
}

export type fetchCountrySuccess = {
    type: typeof FETCH_COUNTRY_SUCCESS
    payload: {
        country: Country
    }
}
export type RemoveCountryAction = {
    type: typeof REMOVE_COUNTRY
    payload: {
        country: Country
    }
}

export type CountryState = {
    countries: Country[]
    inCart: Country[]
    loading: boolean
    error: string
    counter: number
}

export type AppState = {
    countries: CountryState
    filter: ''
    theme: any
}
