import { Country } from './CountryType'

export * from './CountryType'

export type HomeProps = {
    query: string
}

export type searchProps = 'string'

export type SearchBarProps = {
    handleChange: React.ReactEventHandler<HTMLInputElement>
    search: string
}

export type handleItemClick = {
    event: KeyboardEvent
    name: any
}

export type CartItemProps = {
    cart: Country
}

export type ViewCountryProps = {
    country: Country
}

export type CountryProps = {
    population: number
    name: string
    region: string
    language: string[]
    flagUrl: string
}

export type RouteParam = {
    id: string
}

export type TableRowProps = {
    flagUrl: string
    countryName: string
    languages: Object[]
    region: string
    population: number
}

export type FlagPropsType = {
    flag: string
}

export type CountryDetails = {
    flag: string
    name: string
    capital: string
    area: number
    languages: Array<string>
    population: number
    region: string
    currencies: Array<string>
    countries: Array<string>
}

export type MainTableProps = {
    countries: any
    setActiveFilter: Function
}

export type HeaderProps = {
    setActiveFilter?: Function
}
