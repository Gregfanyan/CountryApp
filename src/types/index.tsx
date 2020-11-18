export type CountryProps = {
    population: number
    name: string
    region: string
    language: string
    flagUrl: string
}

export type RouteParam = {
    id: string
}

export type TableRowProps = {
    countries: CountryProps
}

export type SearchBarProps = {
    handleChange: React.ReactEventHandler<HTMLInputElement>
    search: string
}

export type FlagPropsType = {
    flag: string
}

export type searchProps = 'string'

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
    countries: CountryProps
    setActiveFilter: Function
}

export type HeaderProps = {
    setActiveFilter: any
}
