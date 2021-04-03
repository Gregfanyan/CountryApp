import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Icon, Button, Card } from 'semantic-ui-react'

import { RouteParam } from '../../types/ui'
import ViewCountry from '../../components/ViewCountry'
import { AppState } from '../../types/CountryType'
import './SingleCountry.scss'

const SingleCountry = () => {
    const { id } = useParams<RouteParam>()
    const history = useHistory()
    const country = useSelector((state: AppState) =>
        state.countries.countries.find((p) => p.name === id)
    )

    function handleClick() {
        if (!history) {
            return <div>No country</div>
        } else {
            history.push('/')
        }
    }

    return (
        <div className="container">
            <Card.Group
                centered
                style={{ display: 'inline-block', margin: 0 }}
                stackable
            >
                <Button primary onClick={handleClick}>
                    <Icon name="arrow left"> </Icon>
                </Button>
            </Card.Group>
            <Card.Group>
                <ViewCountry country={country} />
            </Card.Group>
        </div>
    )
}
export default SingleCountry
