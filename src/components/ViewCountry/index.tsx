import React, { FunctionComponent } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Country } from '../../types/CountryType'

import './ViewCountry.scss'

const CardStyle = { display: 'inline-block', marginTop: '10px' }

const ViewCountry: FunctionComponent<{ country: Country }> = ({ country }) => {
    const { name, population, region, languages, capital, flags } = country

    if (!country) {
        return <div>No country</div>
    }
    return (
        <Card centered stackable style={CardStyle}>
            <Image
                src={flags.png}
                alt="country"
                wrapped
                ui={false}
                size="small"
            />
            <Card.Content textAlign="center">
                {name.official}
                <Card.Meta>capital: {capital[0]}</Card.Meta>
                <Card.Description>region: {region}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
                population: {population}
            </Card.Content>
            <Card.Content extra textAlign="center">
                languages:
                {languages &&
                    Object.values(languages).map((language, index: number) => (
                        <div key={index}>
                            {language}
                            <br />
                        </div>
                    ))}
            </Card.Content>
        </Card>
    )
}

export default ViewCountry
