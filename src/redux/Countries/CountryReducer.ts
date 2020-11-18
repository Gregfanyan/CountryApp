import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
    CountryActions,
    ADD_COUNTRY,
    CountryState,
    REMOVE_COUNTRY,
} from '../../types/CountryType'

const initialState: CountryState = {
    loading: false,
    countries: [],
    inCart: [],
    error: '',
    counter: 0,
}

const CountryReducers = (state = initialState, action: CountryActions) => {
    switch (action.type) {
        case FETCH_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload,
                error: '',
            }

        case FETCH_COUNTRY_FAILURE:
            return {
                ...state,
                loading: false,
                countries: [],
                error: action.payload,
            }
        case ADD_COUNTRY: {
            const { country } = action.payload
            if (state.inCart.find((p) => p.name === country.name)) {
                return state
            }
            return {
                ...state,
                inCart: [...state.inCart, country],
                counter: state.counter + 1,
            }
        }
        case REMOVE_COUNTRY: {
            const { country } = action.payload
            const index = state.inCart.findIndex((p) => p.name === country.name)
            if (index >= 0) {
                state.inCart.splice(index, 1)
                return {
                    ...state,
                    inCart: [...state.inCart],
                    counter: state.counter - 1,
                }
            }
            return state
        }
        default:
            return state
    }
}

export default CountryReducers
