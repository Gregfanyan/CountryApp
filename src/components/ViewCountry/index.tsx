import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function ViewCountry({ country }: any) {
    const { name, population, region, languages, flag } = country
    console.log(country)
    return (
        <Card.Group itemsPerRow={4} centered>
            <Card>
                <Image
                    src={flag}
                    alt="product"
                    wrapped
                    ui={false}
                    size="small"
                />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>{region}</Card.Description>
                </Card.Content>
                <Card.Content extra>population: {population}</Card.Content>
                <Card.Content extra>
                    languages: {languages.map((lang: any) => lang.name)}
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default ViewCountry
