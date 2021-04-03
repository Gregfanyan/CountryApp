import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import './ViewCountry.scss'

const CardStyle = { display: 'inline-block', marginTop: '10px' }

function ViewCountry({ country }: any) {
    const { name, population, region, languages, capital, flag } = country

    if (!country) {
        return <div>No country</div>
    }
    return (
        <Card centered stackable style={CardStyle}>
            <Image src={flag} alt="country" wrapped ui={false} size="small" />
            <Card.Content textAlign="center">
                {name}
                <Card.Meta>capital: {capital}</Card.Meta>
                <Card.Description>region: {region}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
                population: {population}
            </Card.Content>
            <Card.Content extra textAlign="center">
                languages:
                {languages &&
                    languages.map((lang: any, index: any) => (
                        <div key={index}>
                            {lang.name}
                            <br />
                        </div>
                    ))}
            </Card.Content>
        </Card>
    )
}

export default ViewCountry
