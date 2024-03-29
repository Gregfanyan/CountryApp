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
    name: string
}

export type Provider = {
    connected: boolean
    type: string
}

export type CartItemProps = {
    cart: Country
}

export type LangItemProps = {
    lang: Country
    index: number
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
    flags: {
        png: string
    }
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
    countries: Country
    setActiveFilter: Function
}

export type HeaderProps = {
    connected: boolean
    type: string
}

export type ThemeProps = {
    backgroundColor: string
    textColor: string
    primary: string
}
