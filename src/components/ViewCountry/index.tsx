import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import './ViewCountry.scss'

function ViewCountry({ country }: any) {
    const { name, population, region, languages, capital, flag } = country
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
        <Card.Group itemsPerRow={4} centered>
            <Card centered>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button primary onClick={handleClick}>
                            <Icon name="home"> </Icon>
                            Back
                        </Button>
                    </div>
                </Card.Content>
                <Image src={flag} alt="country" wrapped ui={false} />
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
        </Card.Group>
    )
}

export default ViewCountry
